// ❌ كنت ناسي هذا: لازم tableau لتخزين السيارات
let voitures = [];

// récupération des champs
let matricul = document.getElementById("matricul");
let marque = document.getElementById("marque");
let modele = document.getElementById("modele");
let anneeProd = document.getElementById("anneeProd");
let carburant = document.getElementById("carburant");
let prix = document.getElementById("prix");

// bouton enregistrer
document.getElementById("eng").addEventListener("click", (e) => {
    e.preventDefault();

    // ❌ كنت فقط تستعمل alert بدون تلوين الحقول
    // ✔️ هنا نرجع اللون عادي قبل التحقق
    resetColors();

    if (!valider()) {
        alert("Données invalides");

        // ❌ ما كنتش كتلوّن الحقول الخاطئة
        if (!validerMatricul()) matricul.style.backgroundColor = "orange";
        if (!validerMarque()) marque.style.backgroundColor = "orange";
        if (!validerCarburant()) carburant.style.backgroundColor = "orange";
        if (!validerPrix()) prix.style.backgroundColor = "orange";

        return;
    }

    // ✔️ إنشاء object
    let voiture = {
        matricul: matricul.value,
        marque: marque.value,
        modele: modele.value,
        anneeProd: anneeProd.value,
        carburant: carburant.value,
        prix: prix.value
    };

    // ❌ كنت درت JSON.stringify فقط
    // ✔️ المطلوب: إضافة إلى tableau
    voitures.push(voiture);

    // ❌ ما كانش message للمستخدم
    alert("Voiture ajoutée avec succès");

    // ❌ ما استعملتش vider()
    vider();
});


// ✅ vider formulaire (سؤال 2)
function vider() {
    matricul.value = "";
    marque.value = "";
    modele.value = "";
    anneeProd.value = "";
    carburant.value = "";
    prix.value = "";
}


// ✅ reset colors (إضافة ضرورية)
function resetColors() {
    matricul.style.backgroundColor = "";
    marque.style.backgroundColor = "";
    modele.style.backgroundColor = "";
    anneeProd.style.backgroundColor = "";
    carburant.style.backgroundColor = "";
    prix.style.backgroundColor = "";
}


// ✅ validation matricule (سؤال 3 ✔️ كنت دايرها مزيان)
function validerMatricul() {
    let expreg = /^\d{1,8}-[a-zA-Z]{1}-\d{1,2}$/;
    return expreg.test(matricul.value);
}


// ✅ validation marque (سؤال 4 ✔️ صحيح)
function validerMarque() {
    let expreg = /^[a-zA-Z]{4,15}$/;
    return expreg.test(marque.value);
}


// ✅ validation carburant (✔️ صحيح)
function validerCarburant() {
    let expreg = /^[a-zA-Z]{4,15}$/;
    return expreg.test(carburant.value);
}


// ❌ كان ناقص: التأكد أنه عدد صحيح
function validerPrix() {
    return Number.isInteger(Number(prix.value)) && Number(prix.value) > 0;
}


// ❌ كنت ناسي modele و annee
function validerModele() {
    return modele.value.trim() !== "";
}

function validerAnnee() {
    return /^\d{4}$/.test(anneeProd.value); // سنة مثل 2020
}


// ❌ valider ديالك كانت طويلة وغير نظيفة
function valider() {
    return (
        validerMatricul() &&
        validerMarque() &&
        validerModele() &&
        validerAnnee() &&
        validerCarburant() &&
        validerPrix()
    );
}


// ✅ سؤال 7: bouton consulter
document.getElementById("cons").addEventListener("click", () => {

    let div = document.getElementById("affichage");

    // ❌ ما درتيش هذا الجزء كامل
    let html = "<table border='1'><tr><th>Matricule</th><th>Marque</th><th>Modele</th><th>Annee</th><th>Carburant</th><th>Prix</th></tr>";

    voitures.forEach(v => {
        html += `
        <tr>
            <td>${v.matricul}</td>
            <td>${v.marque}</td>
            <td>${v.modele}</td>
            <td>${v.anneeProd}</td>
            <td>${v.carburant}</td>
            <td>${v.prix}</td>
        </tr>
        `;
    });

    html += "</table>";

    div.innerHTML = html;
});
