document.addEventListener('DOMContentLoaded', function() {
    const tableBody = document.querySelector('#userTable tbody');
    const updateButton = document.querySelector('#updateButton');

    // Fonction pour mettre à jour le tableau avec les données JSON
    function updateTable() {
        fetch('utilisateur.json')
        .then(response => response.json())
        .then(data => {
            // Efface le contenu précédent du tableau
            tableBody.innerHTML = '';

            // Boucle à travers les données JSON et crée les lignes du tableau
            data.forEach(user => {
                const row = document.createElement('tr');
                row.innerHTML = `
                    <td>${user.id}</td>
                    <td>${user.nom}</td>
                    <td>${user.prenom}</td>
                    <td>${user.email}</td>
                `;
                tableBody.appendChild(row);
            });
        })
        .catch(error => console.error('Erreur lors de la récupération des données:', error));
    }

    // Appeler la fonction updateTable() lors du chargement initial
    updateTable();

    // Ajouter un écouteur d'événements pour le bouton "update"
    updateButton.addEventListener('click', updateTable);
});
