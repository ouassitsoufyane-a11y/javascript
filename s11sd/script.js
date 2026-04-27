function verifier() {
    let nom = document.getElementById("nom").value;
    let prenom = document.getElementById("prenom").value;
    let code = document.getElementById("code").value;
    let message = document.getElementById("message");

    
    let nomRegex = /^[A-Za-z]+$/;
    let codeRegex = /^[A-Z]{2}\d{4}$/;

    if (!nomRegex.test(nom)) {
        message.textContent = "❌ Nom غير صحيح (حروف فقط)";
        message.className = "error";
        return;
    }

    if (!nomRegex.test(prenom)) {
        message.textContent = "❌ Prénom غير صحيح (حروف فقط)";
        message.className = "error";
        return;
    }

    if (!codeRegex.test(code)) {
        message.textContent = "❌ الكود خاصو يكون DH1234";
        message.className = "error";
        return;
    }

    message.textContent = "✅ تم التحقق بنجاح!";
    message.className = "success";
}