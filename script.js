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

//createTable(data);

const input = document.querySelector(".input__field");
const inputIcon = document.querySelector(".input__icon");

inputIcon.addEventListener("click", (e) => {
  e.preventDefault();

  inputIcon.setAttribute(
    "src",
    input.getAttribute("type") === "password"
      ? "assets/eye-off.svg"
      : "assets/eye.svg"
  );

  input.setAttribute(
    "type",
    input.getAttribute("type") === "password" ? "text" : "password"
  );
});
