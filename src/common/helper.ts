import axios from "axios"
import { API_URL } from "./urls"

export const fetchPokemons = async () => {
    try {
        const response = await axios.get(API_URL)
        return response.data
    }
    catch (e) {
        console.log(e)
    }
   
},
fetchPokemonDetails = async(url:string)=>{
    try {
        const response = await axios.get(url)
        return response.data
    }
    catch (e) {
        console.log(e)
    }
}