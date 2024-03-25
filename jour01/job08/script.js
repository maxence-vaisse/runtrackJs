
function estNombrePremier(nombre) { // Fonction pour vérifier si un nombre est premier
    if (nombre < 2) { // Si le nombre est inférieur à 2, il n'est pas premier
        return false;
    }
    for (let i = 2; i <= Math.sqrt(nombre); i++) { // On vérifie si le nombre est divisible par un autre nombre
        if (nombre % i === 0) { // Si le nombre est divisible par un autre nombre, il n'est pas premier
            return false;
        }
    }
    return true;
}

function sommeNombresPremiers(a, b) { // Fonction pour vérifier si les deux nombres sont premiers et les additionner
    if (estNombrePremier(a) && estNombrePremier(b)) { // Si les deux nombres sont premiers, on les additionne
        return a + b; // On retourne la somme des deux nombres
    } else {
        return false;
    }
}

let nombre1 = 4; // On définit les deux nombres
let nombre2 = 7; // On définit les deux nombres
let resultat = sommeNombresPremiers(nombre1, nombre2); // On appelle la fonction pour vérifier si les deux nombres sont premiers et les additionner
if (resultat === false) { // Si au moins l'un des nombres n'est pas premier, on affiche un message
    console.log("Au moins l'un des nombres n'est pas premier."); // On affiche un message
} else {  // Si les deux nombres sont premiers, on affiche la somme des deux nombres
    console.log(`La somme de ${nombre1} et ${nombre2} est ${resultat}.`); // On affiche la somme des deux nombres
}