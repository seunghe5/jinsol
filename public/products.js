document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts() {
    fetch('productList.json')
        .then(response => response.json())
        .then(products => {
            displayProducts(products);
        });
}

function displayProducts(products) {
    const productList = document.getElementById('product-list');
    if (!productList) return;
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.className = 'product-item';
        const imageSrc = product.image || 'source/default.jpg'; // 기본 이미지 사용
        productItem.innerHTML = `
            <img src="${imageSrc}" alt="${product.name}">
            <h3>${product.name}</h3>
            <p>가격: ${product.price.toLocaleString()}원</p>
            <button onclick="addToCart(${product.id})">구매하기</button>
            <button onclick="window.location.href='productDetail.html?id=${product.id}'">상세 페이지</button>
        `;
        productList.appendChild(productItem);
    });
}

function addToCart(productId) {
    const cartItems = getCartItemsFromStorage();
    const existingItem = cartItems.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cartItems.push({ id: productId, quantity: 1 });
    }
    saveCartItemsToStorage(cartItems);
    alert('장바구니에 추가되었습니다.');
}

function getCartItemsFromStorage() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function saveCartItemsToStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function sortProducts(sortBy) {
    fetch('productList.json')
        .then(response => response.json())
        .then(products => {
            switch (sortBy) {
                case 'price-asc':
                    products.sort((a, b) => a.price - b.price);
                    break;
                case 'price-desc':
                    products.sort((a, b) => b.price - a.price);
                    break;
                default:
                    products.sort((a, b) => a.id - b.id); // 기본 정렬: ID 순서
            }
            displayProducts(products);
        });
}
