import { useEffect, useState } from "react";
import { Pokemon } from "@/types/pokemon.types";
import { fetchAllPokemon } from "@/services/Pokemon";

const useFetchAllPokemons = (offset:number, limit:number) => {
    const [pokemons, setPokemons] = useState<Pokemon[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchAllPokemon(offset, limit).then((data) => {
            setPokemons(data);
            setLoading(false);
        });
    }, [offset]);

    return { pokemons, loading };
}

export default useFetchAllPokemons;