document.addEventListener('DOMContentLoaded', () => {
    const form = document.querySelector('form');
    const firstname = document.getElementById('firstname');
    const lastname = document.getElementById('lastname');
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    const confirmPassword = document.getElementById('confirm-password');
    const terms = document.getElementById('terms');
    const successMessage = document.getElementById('success-message'); 

    form.addEventListener('submit', e => {
        e.preventDefault();
        validateInputs();
    });

    const setError = (element, message) => {
        const errorDisplay = element.nextElementSibling;
        errorDisplay.innerText = message;
        errorDisplay.classList.remove('hidden');
        element.classList.add('border-red-500');
    };

    const setSuccess = element => {
        const errorDisplay = element.nextElementSibling;
        errorDisplay.innerText = '';
        errorDisplay.classList.add('hidden');
        element.classList.remove('border-red-500');
    };

    const isValidEmail = email => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const laplateformeRe = /@laplateforme\.io$/;
        return re.test(email.trim()) && laplateformeRe.test(email.trim());
    };

    const isValidPassword = password => {
        const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{9,}$/;
        return re.test(password);
    };

    const validateInputs = () => {
        const firstnameValue = firstname.value.trim();
        const lastnameValue = lastname.value.trim();
        const emailValue = email.value.trim();
        const passwordValue = password.value.trim();
        const confirmPasswordValue = confirmPassword.value.trim();

        if(firstnameValue === '') {
            setError(firstname, 'Prénom requis');
        } else {
            setSuccess(firstname);
        }

        if(lastnameValue === '') {
            setError(lastname, 'Nom requis');
        } else {
            setSuccess(lastname);
        }

        if(emailValue === '') {
            setError(email, 'Email requis');
        } else if (!isValidEmail(emailValue)) {
            setError(email, 'Seules les adresses email se terminant par "@laplateforme.io" sont autorisées');
        } else {
            setSuccess(email);
        }

        if(passwordValue === '') {
            setError(password, 'Mot de passe requis');
        } else if (!isValidPassword(passwordValue)) {
            setError(password, 'Le mot de passe doit comporter au moins 8 caractères, une majuscule, une minuscule, un caractère spécial et un chiffre');
        } else {
            setSuccess(password);
        }

        if(confirmPasswordValue === '') {
            setError(confirmPassword, 'Confirmer le mot de passe requis');
        } else if (confirmPasswordValue !== passwordValue) {
            setError(confirmPassword, 'Les mots de passe ne correspondent pas');
        } else {
            setSuccess(confirmPassword);
        }

        const termsLabelContainer = terms.nextElementSibling;
        if (termsLabelContainer) {
            const termsLabel = termsLabelContainer.querySelector('label');
            if (termsLabel) {
                if (!terms.checked) {
                    setError(termsLabel, 'Veuillez accepter les conditions générales');
                } else {
                    setSuccess(termsLabel);
                }
            }
        }

        if (firstnameValue !== '' && lastnameValue !== '' && isValidEmail(emailValue) && isValidPassword(passwordValue) && confirmPasswordValue === passwordValue && terms.checked) {
            const userData = {
                username: `${firstnameValue} ${lastnameValue}`,
                email: emailValue,
                password: passwordValue
            };

            fetch('/api/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(userData),
            })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Erreur lors de la création du compte');
                }
                return response.json();
            })
            .then(data => {
                console.log(data);
                successMessage.innerText = 'Inscription réussie !';
                successMessage.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Erreur:', error);
                setError(email, 'Cette adresse email est déjà utilisée');
            });
        }
    };
});
