document.addEventListener('DOMContentLoaded', () => {
    const cartItems = getCartItemsFromStorage();
    fetch('productList.json')
        .then(response => response.json())
        .then(products => {
            const totalAmountElement = document.getElementById('total-amount');
            const totalAmount = cartItems.reduce((sum, cartItem) => {
                const product = products.find(p => p.id === cartItem.id);
                return sum + (product ? product.price * cartItem.quantity : 0);
            }, 0);
            totalAmountElement.textContent = `₩${totalAmount.toLocaleString()}`;
        })
        .catch(error => console.error('Error fetching product list:', error));

    document.getElementById('checkout-form').addEventListener('submit', (e) => {
        e.preventDefault();
        saveUserData();
        enablePayButton();
    });

    document.getElementById('pay-button').addEventListener('click', () => {
        if (document.getElementById('pay-button').classList.contains('enabled')) {
            const totalAmount = document.getElementById('total-amount').textContent;
            alert(`${totalAmount}이 성공적으로 결제되었습니다.`);
        } else {
            alert('먼저 제출 버튼을 클릭하여 정보를 저장하십시오.');
        }
    });
});

function getCartItemsFromStorage() {
    const cartItems = localStorage.getItem('cartItems');
    return cartItems ? JSON.parse(cartItems) : [];
}

function saveUserData() {
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const address = document.getElementById('address').value;

    const userData = { email, phone, address };

    const loggedInUser = localStorage.getItem('loggedInUser');
    if (loggedInUser) {
        const users = JSON.parse(localStorage.getItem('users')) || {};
        users[loggedInUser] = userData;
        localStorage.setItem('users', JSON.stringify(users));
    } else {
        localStorage.setItem('tempUser', JSON.stringify(userData));
    }
}

function enablePayButton() {
    const payButton = document.getElementById('pay-button');
    payButton.disabled = false;
    payButton.classList.add('enabled');
}
