// 

let form = document.createElement("form");

let inputNom = document.createElement("input");
inputNom.id = "nom";
inputNom.placeholder = "Nom";

let inputTel = document.createElement("input");
inputTel.id = "tel";
inputTel.placeholder = "Téléphone";

let btn = document.createElement("button");
btn.innerText = "Valider";

form.appendChild(inputNom);
form.appendChild(inputTel);
form.appendChild(btn);

document.body.appendChild(form);