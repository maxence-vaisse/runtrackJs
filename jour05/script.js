// Validation du formulaire d'inscription
const registerForm = document.getElementById('registerForm');
if (registerForm) {
    const registerInputs = [
        document.getElementById('lastname'),
        document.getElementById('firstname'),
        document.getElementById('email'),
        document.getElementById('password'),
        document.getElementById('address'),
        document.getElementById('CodePostal')
    ];

    const registerErrors = [
        document.getElementById('lastname-error'),
        document.getElementById('firstname-error'),
        document.getElementById('email-error'),
        document.getElementById('password-error'),
        document.getElementById('address-error'),
        document.getElementById('CodePostal-error')
    ];

    registerForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        let isValid = true;

        // Validation du nom
        if (registerInputs[0].value.trim().length < 2) {
            registerErrors[0].textContent = 'Le nom doit contenir au moins 2 caractères.';
            isValid = false;
        } else {
            registerErrors[0].textContent = '';
        }

        // Validation du prénom
        if (registerInputs[1].value.trim().length < 2) {
            registerErrors[1].textContent = 'Le prénom doit contenir au moins 2 caractères.';
            isValid = false;
        } else {
            registerErrors[1].textContent = '';
        }

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(registerInputs[2].value)) {
            registerErrors[2].textContent = 'Veuillez saisir une adresse email valide.';
            isValid = false;
        } else {
            registerErrors[2].textContent = '';
        }

        // Validation du mot de passe
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(registerInputs[3].value)) {
            registerErrors[3].textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.';
            isValid = false;
        } else {
            registerErrors[3].textContent = '';
        }

        // Validation de l'adresse
        if (registerInputs[4].value.trim() === '') {
            registerErrors[4].textContent = 'Veuillez saisir votre adresse.';
            isValid = false;
        } else {
            registerErrors[4].textContent = '';
        }

        // Validation du code postal
        const codePostalRegex = /^\d{5}$/;
        if (!codePostalRegex.test(registerInputs[5].value)) {
            registerErrors[5].textContent = 'Veuillez saisir un code postal valide (5 chiffres).';
            isValid = false;
        } else {
            registerErrors[5].textContent = '';
        }

        if (isValid) {
            // Le formulaire est valide, vous pouvez soumettre le formulaire ici
            console.log('Formulaire d\'inscription valide, soumission en cours...');
            // registerForm.submit(); // Soumettre le formulaire
        }
    });
}

// Validation du formulaire de connexion
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Empêcher la soumission par défaut du formulaire

        let isValid = true;

        // Validation de l'email
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = 'Veuillez saisir une adresse email valide.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // Validation du mot de passe
        const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = 'Le mot de passe doit contenir au moins 8 caractères, une majuscule et un caractère spécial.';
            isValid = false;
        } else {
            passwordError.textContent = '';
        }

        if (isValid) {
            // Le formulaire est valide, vous pouvez soumettre le formulaire ici
            console.log('Formulaire de connexion valide, soumission en cours...');
            // loginForm.submit(); // Soumettre le formulaire
        }
    });
}
