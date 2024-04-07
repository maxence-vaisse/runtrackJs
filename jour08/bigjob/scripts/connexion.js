document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const errorDisplay = element.nextElementSibling;
        if (errorDisplay) {
            errorDisplay.innerText = message;
            errorDisplay.classList.remove('hidden');
        }
        if (element) {
            element.classList.add('border-red-500');
        }
    };

    const setSuccess = element => {
        const errorDisplay = element.nextElementSibling;
        if (errorDisplay) {
            errorDisplay.innerText = '';
            errorDisplay.classList.add('hidden');
        }
        if (element) {
            element.classList.remove('border-red-500');
        }
    };

    const isValidEmail = email => {
        const laplateformeRe = /@laplateforme\.io$/;
        return laplateformeRe.test(email.trim());
    };

    const validateInputs = () => {
        const emailValue = emailInput.value.trim();
        const passwordValue = passwordInput.value.trim();

        if (emailValue === '') {
            setError(emailInput, 'Le mail est requis');
        } else if (!isValidEmail(emailValue)) {
            setError(emailInput, 'Seules les adresses email de domaine "@laplateforme.io" sont autorisées');
        } else {
            setSuccess(emailInput);
        }

        if (passwordValue === '') {
            setError(passwordInput, 'Le mot de passe est requis');
        } else {
            setSuccess(passwordInput);
        }

        if (emailValue !== '' && passwordValue !== '') {
            simulateLogin(emailValue, passwordValue);
        }
    };

    const simulateLogin = (email, password) => {
        console.log('Tentative de connexion avec : Email =', email, ', Mot de passe =', password);

        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la connexion');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Connexion réussie !');
            // Redirection vers la page calendar.html
            window.location.href = 'calendar.html';
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Échec de la connexion : ' + error.message);
        });
    };
});
