var compteur = 0;

function addOne() {
    compteur++;
    document.getElementById("compteur").textContent = compteur;
}

document.getElementById("button").addEventListener("click", addOne);