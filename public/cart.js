document.addEventListener('DOMContentLoaded', () => {
    loadCartItems();
});

function loadCartItems() {
    const cartItems = getCartItemsFromStorage();
    displayCartItems(cartItems);
}

function displayCartItems(cartItems) {
    const cartItemsContainer = document.getElementById('cart-items');
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    fetch('productList.json')
        .then(response => response.json())
        .then(products => {
            let totalPrice = 0;
            cartItems.forEach(cartItem => {
                const product = products.find(p => p.id === cartItem.id);
                if (product) {
                    const itemTotal = product.price * cartItem.quantity;
                    totalPrice += itemTotal;
                    const cartItemRow = document.createElement('tr');
                    cartItemRow.innerHTML = `
                        <td>${product.name}</td>
                        <td>${product.price.toLocaleString()}원</td>
                        <td><input type="number" value="${cartItem.quantity}" min="1" onchange="updateCartItem(${product.id}, this.value)"></td>
                        <td class="total-price">${itemTotal.toLocaleString()}원</td>
                        <td><button onclick="removeCartItem(${product.id})">삭제</button></td>
                    `;
                    cartItemsContainer.appendChild(cartItemRow);
                }
            });
            document.getElementById('total-price').textContent = `${totalPrice.toLocaleString()}원`;
        });
}

function updateCartItem(productId, quantity) {
    const cartItems = getCartItemsFromStorage();
    const itemIndex = cartItems.findIndex(item => item.id === productId);
    if (itemIndex !== -1) {
        cartItems[itemIndex].quantity = parseInt(quantity);
        if (cartItems[itemIndex].quantity <= 0) {
            cartItems.splice(itemIndex, 1);
        }
        saveCartItemsToStorage(cartItems);
        displayCartItems(cartItems);
    }
}

function removeCartItem(productId) {
    let cartItems = getCartItemsFromStorage();
    cartItems = cartItems.filter(item => item.id !== productId);
    saveCartItemsToStorage(cartItems);
    displayCartItems(cartItems);
}

function getCartItemsFromStorage() {
    return JSON.parse(localStorage.getItem('cartItems')) || [];
}

function saveCartItemsToStorage(cartItems) {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
}
