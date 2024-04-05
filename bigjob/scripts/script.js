document.getElementById("signup-btn").addEventListener("click", function() {
    var emailInput = document.getElementById("email").value;
    if (!isValidDomain(emailInput)) {
        alert("Seuls les membres de La Plateforme peuvent créer un compte !");
        return false;
    }
    // Si le domaine est valide, le formulaire peut être soumis
    // Ajoutez ici le code pour soumettre le formulaire ou effectuer d'autres actions
});

function isValidDomain(email) {
    var allowedDomain = "laplateforme.io";
    var userEmailDomain = email.split('@')[1];
    return userEmailDomain === allowedDomain;
}
