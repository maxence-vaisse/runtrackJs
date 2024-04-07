document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('authorization-form');
    const logoutBtn = document.getElementById('logoutBtn');

    form.addEventListener('submit', e => {
        e.preventDefault();
        const date = document.getElementById('date').value;
        submitAuthorizationRequest(date);
    });

    logoutBtn.addEventListener('click', () => {
        fetch('/api/logout', {
            method: 'POST',
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la déconnexion');
            }
            return response.json();
        })
        .then(data => {   
            alert('Déconnexion réussie !');
            if (window.location.pathname !== '/connexion.html') {
                window.location.href = '/connexion.html';
            }
        })
        .catch(error => {
            console.error('Erreur lors de la déconnexion:', error);
            alert('Échec de la déconnexion : ' + error.message);
        });
    });

    function submitAuthorizationRequest(date) {
        fetch('/api/authorization-request', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ date }),
        })
        .then(response => {
            if (!response.ok) {
                throw new Error('Échec de la demande d\'autorisation');
            }
            return response.json();
        })
        .then(data => {
            console.log(data);
            alert('Demande d\'autorisation envoyée !');
        })
        .catch(error => {
            console.error('Erreur:', error);
            alert('Échec de la demande d\'autorisation : ' + error.message);
        });
    }
});
