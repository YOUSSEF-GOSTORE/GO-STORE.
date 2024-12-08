let cart = [];
let totalPrice = 0;

function addToCart(productName, price) {
  cart.push({ name: productName, price: price });
  totalPrice += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cartItems");
  const totalElement = document.getElementById("totalPrice");

  cartItems.innerHTML = "";
  cart.forEach((item, index) => {
    const div = document.createElement("div");
    div.textContent = `${item.name} - $${item.price}`;
    cartItems.appendChild(div);
  });

  totalElement.textContent = totalPrice;
}

function shopNow() {
  window.location.href = "#products";
}