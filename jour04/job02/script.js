function jsonValueKey(json, key) {
    try {
        // Vérifier si la clé existe dans l'objet JSON
        if (key in json) {
            // Retourner la valeur associée à la clé
            return json[key];
        } else {
            // Si la clé n'existe pas, retourner null ou une autre valeur par défaut selon le cas
            return null;
        }
    } catch (error) {
        // Gérer les erreurs liées à un JSON invalide
        console.error("Erreur lors de la récupération de la valeur JSON :", error);
        return null;
    }
}

// Exemple d'utilisation :
const json = {
    "name": "La Plateforme_",
    "address": "8 rue d'Hozier",
    "city": "Marseille",
    "nb_staff": "11",
    "creation": "2019"
};

const key = "city";
const value = jsonValueKey(json, key);
console.log(`La valeur associée à la clé "${key}" est : ${value}`);
