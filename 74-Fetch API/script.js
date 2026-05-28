// fetch = FUNCTION USED FOR MAKING HTTP REQUESTS TO FETCH RESOURCES.
//         (JSON style data, images, files)
//         SIMPLIFIES ASYNCHRONOUS DATA FETCHING IN JAVASCRIPT AND USED FOR INTERACTING WITH APIs TO RETREIVE AND SEND DATA ASYNCHRONOUSLY OVER THE WEB.
//         fetch(url, {options})

fetchData();
async function fetchData() {
    try {
        const pokemonName = document.getElementById('pokemonName').value.toLowerCase().trim();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

        if (!response.ok) {
            throw new Error("Could not fetch resource");
        }

        const data = await response.json();
        const imgElement = document.getElementById('pokemonSprite');

        // Safety check for the nested sprites object
        if (data.sprites && data.sprites.front_default) {
            imgElement.src = data.sprites.front_default;
            imgElement.style.display = "block";
        } else {
            // Fallback if the specific image is missing
            imgElement.src = "https://placeholder.com";
            imgElement.style.display = "block";
        }

    } catch (error) {
        console.error(error);
        // Clear image on error
        document.getElementById('pokemonSprite').style.display = "none";
    }
}

