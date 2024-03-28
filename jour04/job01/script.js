// script.js

document.getElementById('button').addEventListener('click', () => {
    fetch('expression.txt')
        .then(response => {
            if (!response.ok) {
                throw new Error('Erreur de récupération du fichier');
            }
            return response.text();
        })
        .then(data => {
            document.getElementById('expression').textContent = data;
        })
        .catch(error => {
            console.error('Erreur:', error);
        });
});
