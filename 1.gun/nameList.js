let nameArray = ["ahmet", "mehmet", "ayse", "fatma"];
const app = document.getElementById("app");

const ul = document.createElement("ul");

app.appendChild(ul);

for (let i = 0;; i < nameArray.length; i++) {
  let li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML += nameArray[i];
}
