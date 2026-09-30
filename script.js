const btn = document.getElementById("btn");
const container = document.getElementById("container");
const template = document.getElementById("template");

btn.onclick = async () => {
  const res = await fetch("https://dummyjson.com/products");
  const { products } = await res.json();

  products.forEach((p) => {
    const item = template.content.cloneNode(true);

    item.querySelector("img").src = p.thumbnail;
    item.querySelector("h6").textContent = p.title;
    item.querySelector("p").textContent = p.description;
    item.querySelector("b").textContent = `$${p.price}`;
    item.querySelector("span").textContent = `★ ${p.rating}`;

    container.appendChild(item);
  });
};