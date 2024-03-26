var compteur = 0;

function addone() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
}

document.getElementById("button").addEventListener("click", addone);