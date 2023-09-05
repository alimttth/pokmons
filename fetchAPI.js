async function fetchPokmon(id) {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);

    const json = await response.json()

    return json
}

export {fetchPokmon}