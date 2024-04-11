"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import SearchBar from "@/components/search-bar/SearchBar";
import CardGrid from "@/components/card-grid/CardGrid";
import Footer from "@/components/common/footer/Footer";
import CardItem from "@/components/card-item/CardItem";
import Pagination from "@/components/common/pagination/PaginationButtons";
import { fetchAllPokemon } from '@/services/Pokemon';
import useFetchAllPokemons from "@/hooks/useFetchAllPokemons";



const page = () => {

    const [offset, setOffset] = useState(0);
    const [name, setName] = useState('');
    const { pokemons, loading } = useFetchAllPokemons(offset, 9);

    return (
        <>
        <div className="container py-8 px-8 mx-0 min-w-full flex flex-col items-center">
            <Image src="/pokedexel.png" width={300} height={250} alt={'pokedex logo'} />
            <div className="p-8">
                <SearchBar onSearch={setName} />
            </div>
            <CardGrid>
                {loading ? (
                    <div className="items-center text-center">
                    <p className="">Loading...</p>
                    </div>
                ) : (
                    pokemons.map((pokemon) => (
                        <CardItem key={pokemon.id} imageUrl={pokemon.officialArtwork} title={pokemon.name} type={pokemon.types} id={pokemon.id} />
                    ))
                )}
            </CardGrid>
            <div className="mt-12">
                <Pagination offset={offset} setOffset={setOffset} />
            </div>
        </div>
            <Footer />
        </>
    )
}
export default page