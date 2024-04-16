function changeMode() {
  let checkbox = document.getElementById("btn-mode");
  let body = document.body;

  if (checkbox.checked) {
    console.log(checkbox);
    console.log(body);
    body.classList.add("dark");
  } else {
    body.classList.remove("dark");
  }
}

document.getElementById("btn-mode").addEventListener("change", changeMode);

let data = [
  {
    Nombre: "Juan",
    Edad: 30,
    Ciudad: "Barcelona",
    País: "España",
  },
  {
    Nombre: "Ciro",
    Edad: 35,
    Ciudad: "Pereira",
    País: "Colombia",
  },
  {
    Nombre: "Naranjo",
    Edad: 45,
    Ciudad: "Pereira",
    País: "Colombia",
  },
];

function createTable(data) {
  let tableUtp = document.getElementById("miTabla");
  let headUtp = tableUtp
    .getElementsByTagName("thead")[0]
    .getElementsByTagName("tr")[0];
  let bodyTableUtp = tableUtp.getElementsByTagName("tbody")[0];

  headUtp.innerHTML = "";
  bodyTableUtp.innerHTML = "";

  for (let key in data[0]) {
    let th = document.createElement("th");
    th.textContent = key;
    headUtp.appendChild(th);
  }

  data.forEach((item) => {
    let row = bodyTableUtp.insertRow();
    for (let key in item) {
      let cell = row.insertCell();
      cell.textContent = item[key];
    }
  });
}

createTable(data);
