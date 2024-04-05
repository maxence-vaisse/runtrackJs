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

// Fonction pour enregistrer un utilisateur dans le stockage local
function saveUser(user) {
    // Vérifier si des utilisateurs existent déjà dans le stockage local
    var users = JSON.parse(localStorage.getItem('users')) || [];

    // Ajouter le nouvel utilisateur à la liste
    users.push(user);

    // Enregistrer la liste mise à jour dans le stockage local
    localStorage.setItem('users', JSON.stringify(users));
    alert("Inscription réussie !");
}

// Fonction pour gérer la soumission du formulaire
document.getElementById("signup-btn").addEventListener("click", function() {
    var firstName = document.getElementById("first-name").value;
    var lastName = document.getElementById("last-name").value;
    var gender = document.getElementById("country").value;
    var address = document.getElementById("adress").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;

    // Créer un objet représentant l'utilisateur
    var user = {
        firstName: firstName,
        lastName: lastName,
        gender: gender,
        address: address,
        email: email,
        password: password
    };

    // Enregistrer l'utilisateur
    saveUser(user);
    // Réinitialiser le formulaire
    document.getElementById("signup-form").reset();
});