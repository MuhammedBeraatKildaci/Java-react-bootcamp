const app = document.getElementById("app");
const ul = document.createElement("ul");
app.appendChild(ul);

fetch("http://localhost:3000/names")
  .then((response) => response.json())
  .then((json) => {
    json.map((item) => {
      let li = document.createElement("li");
      ul.appendChild(li);
      li.innerHTML += `
      <span>${item.id}</span>
      <span>${item.name}</span>`;
    });
  });
