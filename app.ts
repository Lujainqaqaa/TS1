// Variables and basic data types
const storeName: string = "ElectroShop";
const currency: string = "USD";
let isOpen: boolean = true;
let productCount: number = 3;
let anything: any = "Example";
let unknownValue: unknown = 10;
let nothing: null = null;
let notSet: undefined = undefined;
function sayHello(): void { console.log("Hello!"); }

// Arrays
const productNames: string[] = ["Laptop", "Headphones", "Keyboard", "Phone", "Mouse"];
const oneProduct: [string, number, boolean] = ["Laptop", 650, true];

// Exactly three products
type Product = { name: string; description: string; price: number };
const products: Product[] = [
  { name: "Laptop", description: "Core i5, 8GB RAM", price: 650 },
  { name: "Headphones", description: "Wireless headphones", price: 75 },
  { name: "Keyboard", description: "Gaming keyboard", price: 45 },
];

// Functions: parameter types and return types
function calculateDiscount(price: number, discount: number): number {
  return price - price * discount / 100;
}
function checkAvailability(quantity: number): string {
  if (quantity > 0) return "In Stock";
  return "Out of Stock";
}
function showMessage(message: string): void {
  console.log(message);
}

// Optional and default parameters
function showProduct(name: string, price: number, description?: string, money: string = "USD"): void {
  console.log(name, price, money, description ?? "No description");
}

// Rest parameter
function totalPrice(...prices: number[]): number {
  return prices.reduce((total, price) => total + price, 0);
}

// if/else and loops
if (isOpen) showMessage("Store is open");
else showMessage("Store is closed");

const priceToCheck: number = products[0].price;
if (priceToCheck > 500) showMessage("Expensive Product");
else if (priceToCheck >= 100) showMessage("Medium Price");
else showMessage("Affordable Product");

for (const name of productNames) console.log(name);
let over100: number = 0;
for (const product of products) {
  if (product.price > 100) over100++;
}
console.log("Products over 100:", over100);

// Small examples to try in the console
console.log(calculateDiscount(650, 10));
console.log(checkAvailability(2));
showProduct("Laptop", 650, "Core i5, 8GB RAM");
console.log(totalPrice(100, 200, 50, 150));
console.log(anything, unknownValue, nothing, notSet, productCount, oneProduct);
sayHello();

// Show products only after clicking the button
const button = document.querySelector<HTMLButtonElement>("#load-products");
const container = document.querySelector<HTMLDivElement>("#products");
const title = document.querySelector<HTMLHeadingElement>("#store-name");
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
