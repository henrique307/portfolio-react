const _URL = "https://pokeapi.co/api/v2/pokemon"
    
export async function getPokemons(page: number) {
    let pokemons = [];
    let pokemonsPerPage = 20;

    for (let i = (page - 1) * pokemonsPerPage + 1; i <= page * pokemonsPerPage; i++) {
        pokemons.push(await fetch(`${_URL}/${i}`).then(res => res.json()));
    }

    return pokemons;
}