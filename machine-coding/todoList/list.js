let array = [];

window.onload = () => {
  render(array);
};

function addList() {
  let inputValue = document.getElementById("list-style").value;
  array.push(inputValue);
  render(array);
}

function render(newList) {
  let list = document.getElementById("updated-list");

  let container = newList.map(
    (item, index) =>
      `<li>${item} <button onclick='deleteItem(${index})'>❌</button></li>`
  );
  list.innerHTML = container;
  document.getElementById("list-style").value = "";
}

function deleteItem(delItem) {
  array.splice(delItem, 1);
  render(array);
}

// let input = document.getElementById("input-style");
// let list = document.getElementById("updated-list");
// let addBtn = document.getElementById("addButton");

// addBtn.addEventListener("click", function (e) {
//   let val = input.value;

//   addItem(val);
// });

// function addItem(val) {
//   let div = document.createElement("div");
//   div.classList.add("item");
//   list.appendChild(div);

//   let span = document.createElement("span");
//   span.classList.add("text");
//   span.innerText = val;
//   div.appendChild(span);

//   let markBtn = document.createElement("button");
//   markBtn.classList.add("markBtn");
//   markBtn.innerText = "✔️";
//   div.appendChild(markBtn);

//   let deleteBtn = document.createElement("button");
//   deleteBtn.classList.add("deleteBtn");
//   deleteBtn.innerText = "❌";
//   div.appendChild(deleteBtn);
// }
