

let nameArray = ["ahmet", "mehmet", "ayse", "fatma"];
const app = document.getElementById("app");

const ul = document.createElement("ul");

app.appendChild(ul);

for (var i = 0; i < nameArray.length; i++) {
  var li = document.createElement("li");

  ul.appendChild(li);
  li.innerHTML = li.innerHTML + nameArray[i];
}
