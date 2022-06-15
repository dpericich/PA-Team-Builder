import axios from 'axios';

const BASE_POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonData = async (pokemonName: string) => {
    const pokemonResponse = await axios.get(`${BASE_POKE_API_URL}${pokemonName.toLowerCase()}`);
    const pokemonData = pokemonResponse.data;
    return pokemonData;
}

export default getPokemonData;
