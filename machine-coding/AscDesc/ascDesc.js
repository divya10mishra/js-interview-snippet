let data = [];
function apiCall() {
  document.addEventListener("DOMContentLoaded", async () => {
    const url = "https://fakestoreapi.com/products?sort=asc";
    const result = await fetch(url);
    data = await result.json();
    console.log(data, "data");
    mapData(data);
  });
}

function onDropdownChange() {
  let sorted = [];
  let dropdown = document.getElementById("dropdown1").value;
  if (dropdown === "ascending") {
    sorted = data.sort((a, b) => a.id - b.id);
  } else if (dropdown === "descending") {
    sorted = data.sort((a, b) => b.id - a.id);
  } else {
    sorted = data;
  }
  mapData(sorted);
}

function mapData(mapping) {
  let container = document.getElementById("data-container");
  let content = mapping.map(
    (item) =>
      ` <div style="border:1px solid black; padding:1%; width:20%">
          <h3>${item.id}</h3>
          <div>${item.title}</div>
          <div>${item.description}</div>
          <div>${item.category}</div>
        </div>`
  );
  container.innerHTML = content;
}
apiCall();
