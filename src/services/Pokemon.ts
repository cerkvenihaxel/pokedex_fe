import {Pokemon} from "@/types/pokemon.types";
import conf from "@/lib/config";

const {URI} = conf;

export const fetchAllPokemon = async(offset: number, limit:number): Promise<Pokemon[]>=>{
    return fetch(`${URI}/list?limit=${limit}&offset=${offset}`)
        .then(res=>res.json())
        .catch(err=>console.error(err));
}
export const fetchPokemonById = async(id: any): Promise<Pokemon>=>{
    return fetch(`${URI}/${id}`)
        .then(res=>res.json())
        .catch(err=>console.error(err));
}

