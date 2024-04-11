import {useEffect, useState} from "react";
import {Pokemon} from "@/types/pokemon.types";
import {fetchPokemonById} from "@/services/Pokemon";

const useFetchPokemonById = (id: any) => {
    const [pokemon, setPokemon] = useState<Pokemon>();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchPokemonById(id).then((data) => {
            setPokemon(data);
            setLoading(false);
        });
    });

    return { pokemon, loading };
}

export default useFetchPokemonById;