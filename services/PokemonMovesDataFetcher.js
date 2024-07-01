import axios from './utils/axios'

export class PokemonMovesDataFetcher {
    constructor(ctx) {
        this.axios = axios
    }

    async getAllPokemonMoves() {
        //use Axios here
        return await axios.get(`https://pokeapi.co/api/v2/move/`)
    }

    async getPokemonSpecificMove(moveIdOrName) {
        return await axios.get(`https://pokeapi.co/api/v2/move/${moveIdOrName}/`)
    }
}

export const fetcher = new PokemonMovesDataFetcher()