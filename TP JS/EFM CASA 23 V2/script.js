
let code = document.getElementById("code");
let titre = document.getElementById("titre");
let description = document.getElementById("description");
let prix = document.getElementById("prix");
let categorie = document.getElementById("categorie");

let selectindex = null;

// ✅ Class Produit
class Produit {
    constructor(code, titre, description, prix, categorie){
        this.code = code;
        this.titre = titre;
        this.description = description;
        this.prix = prix;
        this.categorie = categorie;
    }
}

// ✅ Initial data
let products = [
    new Produit(1,"ArganOil","huile d'argan",199,"Santé"),
    new Produit(2,"Nike Zoom","chaussure homme",599,"Sport")
];

// ✅ Show form
function showForm(){
    document.getElementById("formContainer").style.display = "block";
}

// ✅ Annuler
function annuler(){
    document.getElementById("formContainer").style.display = "none";
    clearForm();
}

// ✅ Clear form
function clearForm(){
    code.value = "";
    titre.value = "";
    description.value = "";
    prix.value = "";
    categorie.value = "";
}

// ✅ Validation
function validation(){
    return (
        code.value &&
        titre.value &&
        description.value &&
        prix.value &&
        categorie.value
    );
}

// ✅ Add product
function addProduct(){

    if(!validation()){
        alert("Tous les champs sont obligatoires !");
        return;
    }

    let exists = products.some(p => p.code == code.value);

    if(exists){
        alert("Code déjà existe !");
        return;
    }

    let produit = new Produit(
        code.value,
        titre.value,
        description.value,
        prix.value,
        categorie.value
    );

    products.push(produit);
    afficher();
    clearForm();
    annuler();
}

// ✅ Display products
function afficher(){
    let tbody = document.getElementById("productTable");
    tbody.innerHTML = "";

    products.forEach((p, index) => {
        tbody.innerHTML += `
            <tr data-index="${index}">
                <td>${p.code}</td>
                <td>${p.titre}</td>
                <td>${p.description}</td>
                <td>${p.prix}</td>
                <td>${p.categorie}</td>
            </tr>
        `;
    });
}

// ✅ Select row
document.getElementById("productTable").addEventListener("click", (e) => {
    let row = e.target.closest("tr");

    if(row){
        document.querySelectorAll("#productTable tr")
        .forEach(r => r.classList.remove("table-success"));

        row.classList.add("table-success");
        selectindex = Number(row.dataset.index);
    }
});

// ✅ Delete product
function deleteProduct(){
    if(selectindex === null){
        alert("Sélectionner un produit !");
        return;
    }

    if(confirm("Supprimer ce produit ?")){
        products.splice(selectindex,1);
        afficher();
        selectindex = null;
    }
}

// ✅ Load categories (API + fallback)
function loadCategories(){
    fetch("https://www.mystore.com/cat")
    .then(res => res.json())
    .then(data => displayCategories(data))
    .catch(() => {
        let fake = [
            {title:"Santé"},
            {title:"Sport"},
            {title:"Alimentation"}
        ];
        displayCategories(fake);
    });
}

// ✅ Display categories
function displayCategories(data){
    let list = document.getElementById("categoriesList");
    list.innerHTML = "";

    data.forEach(cat => {
        list.innerHTML += `<li class="list-group-item">${cat.title}</li>`;
    });
}

// Init
afficher();