document.getElementById("filterButton").addEventListener("click", function() {
    const id = document.getElementById("id").value.trim();
    const nom = document.getElementById("nom").value.trim();
    const type = document.getElementById("type").value.trim();

    fetch("pokemon.json")
        .then(response => response.json())
        .then(data => {
            const filteredData = data.filter(pokemon => {
                if (id && pokemon.id != id) return false;
                if (nom && !pokemon.name.english.toLowerCase().includes(nom.toLowerCase())) return false;
                if (type && !pokemon.type.includes(type)) return false;
                return true;
            });

            displayPokemon(filteredData);
        })
        .catch(error => {
            console.error("Error fetching data:", error);
        });
});

function displayPokemon(pokemonData) {
    const pokemonListDiv = document.getElementById("pokemonList");
    pokemonListDiv.innerHTML = "";

    if (pokemonData.length === 0) {
        pokemonListDiv.textContent = "Aucun Pokémon trouvé.";
        return;
    }

    const ul = document.createElement("ul");

    pokemonData.forEach(pokemon => {
        const li = document.createElement("li");
        li.textContent = `${pokemon.name.english} - Type: ${pokemon.type.join(", ")}`;
        ul.appendChild(li);
    });

    pokemonListDiv.appendChild(ul);
}
