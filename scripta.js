let cart = JSON.parse(localStorage.getItem('cart')) || [];

function addToCart(item, price) {
    cart.push({ item, price });
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(item + " added to cart!");
}

function displayCart() {
    let cartItems = document.getElementById('cart-items');
    let total = 0;
    cart.forEach((c) => {
        let li = document.createElement('li');
        li.textContent = `${c.item} - ₹${c.price}`;
        cartItems.appendChild(li);
        total += c.price;
    });
    document.getElementById('total').textContent = "Total: ₹" + total;
}

if (window.location.pathname.includes('cart.html')) {
    displayCart();
}
