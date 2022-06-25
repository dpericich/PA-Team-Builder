import axios from 'axios';
import { hisuianPokemon, variantTypePokemon } from './pokemon';

const BASE_POKE_API_URL = "https://pokeapi.co/api/v2/pokemon/"

const getPokemonData = async (pokemonName: number) => {
    if (hisuianPokemon[pokemonName]) {
        return hisuianPokemon[pokemonName]
    }
    
    const pokemonResponse = await axios.get(`${BASE_POKE_API_URL}${pokemonName}`);
    const pokemonData = pokemonResponse.data;
    return pokemonData;
}

export const hisuianPokemonNumbers: number[] = Object.keys(hisuianPokemon).map(i => parseInt(i))

export default getPokemonData;
