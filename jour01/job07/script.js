function jourTravaille(date) {
    var ferie = [
        "01/01", "01/05", "09/05", "14/07", "01/11", "11/11", "25/12"
    ];

    var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    var dateFormatted = date.toLocaleDateString('fr-FR', options);

    var jour = date.getDate();
    var mois = date.getMonth() + 1;
    var annee = date.getFullYear();
    var dateFerie = jour.toString().padStart(2, '0') + "/" + mois.toString().padStart(2, '0');

    if (date.getDay() === 0 || date.getDay() === 6) {
        console.log("Non, " + dateFormatted + " est un week-end.");
    } else if (ferie.includes(dateFerie)) {
        console.log("Le " + dateFormatted + " est un jour férié.");
    } else {
        console.log("Oui, " + dateFormatted + " est un jour travaillé.");
    }
}

jourTravaille(new Date("2024-11-04"));