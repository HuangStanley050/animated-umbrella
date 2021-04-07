import faker from "faker";

export const mount = (htmlElement) => {
  let products = "";

  for (let i = 0; i < 3; i++) {
    const name = faker.commerce.productName();
    products += `<div>${name}</div>`;
  }
  htmlElement.innerHTML = products;
};

if (process.env.NODE_ENV === "development") {
  const el = document.getElementById("dev-products");
  if (el) {
    mount();
  }
}
