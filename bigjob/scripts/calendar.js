document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector('form');
    const tbody = document.querySelector('tbody');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        
        const currentDate = new Date();
        const selectedDate = new Date(form.date.value);

        if (selectedDate <= currentDate) {
            alert("La date sélectionnée est déjà passée. Vous ne pouvez plus faire de demande d'autorisation.");
            return;
        }

        // Envoyer la demande d'autorisation (simulation ici)
        alert("Demande d'autorisation envoyée pour le " + form.date.value + " avec le motif suivant : " + form.motif.value);

        // Ajouter la demande d'autorisation au tableau
        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${form.date.value}</td>
            <td>${form.motif.value}</td>
        `;
        tbody.appendChild(newRow);

        // Réinitialiser le formulaire (facultatif)
        form.reset();
    });
});