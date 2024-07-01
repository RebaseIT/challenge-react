import axios from './utils/axios'

export class PokemonDataFetcher {
    constructor(ctx) {
        this.axios = axios
    }

    async getAllPokemons() {
        //use Axios here
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/`)
    }

    async getPokemonSpecificMove(pokemonIdOrName) {
        return await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonIdOrName}/`)
    }
}

export const fetcher = new PokemonDataFetcher()