// JavaScript version of app.ts. The browser runs this file.
const storeName = "ElectroShop";
const currency = "USD";
let isOpen = true;
let productCount = 3;
let anything = "Example";
let unknownValue = 10;
let nothing = null;
let notSet = undefined;
function sayHello() { console.log("Hello!"); }

const productNames = ["Laptop", "Headphones", "Keyboard", "Phone", "Mouse"];
const oneProduct = ["Laptop", 650, true];
const products = [
    { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
    { name: "Headphones", description: "Wireless headphones", price: 75 },
    { name: "Keyboard", description: "Gaming keyboard", price: 45 },
];

function calculateDiscount(price, discount) {
    return price - price * discount / 100;
}
function checkAvailability(quantity) {
    if (quantity > 0) return "In Stock";
    return "Out of Stock";
}
function showMessage(message) { console.log(message); }
function showProduct(name, price, description, money = "USD") {
    console.log(name, price, money, description ?? "No description");
}
function totalPrice(...prices) {
    return prices.reduce((total, price) => total + price, 0);
}

if (isOpen) showMessage("Store is open");
else showMessage("Store is closed");
const priceToCheck = products[0].price;
if (priceToCheck > 500) showMessage("Expensive Product");
else if (priceToCheck >= 100) showMessage("Medium Price");
else showMessage("Affordable Product");
for (const name of productNames) console.log(name);
let over100 = 0;
for (const product of products) {
    if (product.price > 100) over100++;
}
console.log("Products over 100:", over100);

console.log(calculateDiscount(650, 10));
console.log(checkAvailability(2));
showProduct("Laptop", 650, "Core i5, 8GB RAM");
console.log(totalPrice(100, 200, 50, 150));
console.log(anything, unknownValue, nothing, notSet, productCount, oneProduct);
sayHello();

const button = document.querySelector("#load-products");
const container = document.querySelector("#products");
const title = document.querySelector("#store-name");
if (title) title.textContent = storeName;
button?.addEventListener("click", () => {
    if (!container) return;
    container.innerHTML = "";
    for (const product of products) {
        container.innerHTML += `<div class="product">
      <h2>${product.name}</h2>
      <p>${product.description}</p>
      <p>${product.price} ${currency}</p>
    </div>`;
    }
});
