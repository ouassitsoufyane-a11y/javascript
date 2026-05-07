
function validation(){
    let nom = document.getElementById("nom");
    let email = document.getElementById("email");
    let tele = document.getElementById("tele");
    let coure = document.getElementById("coure");

    if(
        nom.value === "" ||
        email.value === "" ||
        tele.value === "" ||
        coure.value === ""
    ){
        return false;
    }

    return true;
}


function veriftele(){
    let tele = document.getElementById("tele");

    let expreg = /^(06|05)\d{8}$/;
    return expreg.test(tele.value);
}


function vider(){
    document.getElementById("nom").value = "";
    document.getElementById("email").value = "";
    document.getElementById("tele").value = "";
    document.getElementById("coure").value = "";
}


function remplirCours(){
    fetch("data.json")
        .then(res => res.json())
        .then(data => {

            let select = document.getElementById("coure");
            select.innerHTML = "";

            data.type.forEach(cour => {
                select.innerHTML += `
                    <option value="${cour.nom}">
                        ${cour.nom}
                    </option>
                `;
            });

        })
        .catch(err => console.log("Erreur JSON:", err));
}


let dib = document.createElement("div");
dib.className = "main";

let di2 = document.createElement("div");
di2.className = "title";

let di3 = document.createElement("div");
di3.className = "info";

let form = document.createElement("form");

let h1 = document.createElement("h1");
h1.innerText = "Inscrivez-vous ici";


let input = document.createElement("input");
input.type = "text";
input.id = "nom";
input.placeholder = "nom";

let input1 = document.createElement("input");
input1.type = "text";
input1.id = "email";
input1.placeholder = "email";

let input2 = document.createElement("input");
input2.type = "text";
input2.id = "tele";
input2.placeholder = "téléphone";


let select = document.createElement("select");
select.id = "coure";


let button = document.createElement("input");
button.type = "button";
button.value = "envoyer";


di2.appendChild(h1);
di3.appendChild(input);
di3.appendChild(input1);
di3.appendChild(input2);
di3.appendChild(select);

form.appendChild(di2);
form.appendChild(di3);
form.appendChild(button);

dib.appendChild(form);
document.body.appendChild(dib);


remplirCours();


button.addEventListener("click", function () {
    if (validation() && veriftele()) {
        alert("تم التسجيل بنجاح");
        vider();
    } else {
        alert("تأكد من المعلومات");
    }
});


dib.style.display = "flex";
dib.style.flexDirection = "column";
dib.style.justifyContent = "center";
dib.style.alignItems = "center";
dib.style.height = "100vh";

form.style.padding = "25px";
form.style.backgroundColor = "rgba(0,0,0,0.1)";

di3.style.display = "flex";
di3.style.flexDirection = "column";

let elements = [input, input1, input2, select];

elements.forEach(el => {
    el.style.padding = "8px";
    el.style.marginBottom = "15px";
    el.style.border = "none";
    el.style.borderBottom = "1px solid black";
    el.style.background = "transparent";
});

button.style.width = "100%";
button.style.padding = "10px";
button.style.cursor = "pointer";