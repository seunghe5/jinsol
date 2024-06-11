document.addEventListener('DOMContentLoaded', () => {
    const urlParams = new URLSearchParams(window.location.search);
    const productId = urlParams.get('id');
    if (productId) {
        loadProductDetail(productId);
    }
});

function loadProductDetail(productId) {
    fetch('productList.json')
        .then(response => response.json())
        .then(products => {
            const product = products.find(p => p.id == productId);
            if (product) {
                displayProductDetail(product);
            }
        })
        .catch(error => {
            console.error('Error loading product detail:', error);
        });
}

function displayProductDetail(product) {
    document.getElementById('product-image').src = product.image || 'source/default.jpg';
    document.getElementById('product-description').textContent = product.description;
    document.getElementById('product-price').textContent = `Price: ${product.price.toLocaleString()}원`;

    document.getElementById('add-to-cart').addEventListener('click', () => {
        addToCart(product.id);
    });
}

function addToCart(productId) {
    const cartItems = getCartItemsFromStorage();
    const existingItem = cartItems.find(item => item.id == productId);
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
