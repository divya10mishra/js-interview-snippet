let array = [];

function addList() {
  let inputValue = document.getElementById("list-style").value;
  let list = document.getElementById("updated-list");

  array.push(inputValue);

  let container = array.map(
    (item, index) =>
      `<li>${item} <button onclick="deleteItem(${index})">❌</button></li>`
  );

  list.innerHTML = container;
  document.getElementById("list-style").value = "";
}

function deleteItem(index) {
  array.splice(index, 1);
  addList();
}
