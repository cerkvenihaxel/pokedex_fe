"use client";
import React from 'react'
import Image from "next/image";
import { useRouter, useSearchParams, useParams } from 'next/navigation';
import Footer from "@/components/common/footer/Footer";
import PokemonCard from "@/components/poke-info/PokemonCard";
import useFetchPokemonById from "@/hooks/useFetchPokemonById";



export default function Page() {
    const router = useRouter();
    const params = useParams();
    const id = params.id;
    const { pokemon, loading } = useFetchPokemonById(id);
    return (
        <>
            <div className="items-start p-8 text-2xl cursor-pointer">
                <a onClick={() => router.push('/home')}>
                    {`<- Back`}
                </a>
            </div>

            <div className="container py-8 px-8 mx-0 min-w-full flex flex-col items-center">
                <Image src="/pokedexel.png" width={300} height={250} alt={'pokedex logo'} />
                <div className="p-8">
                </div>
                <PokemonCard name={pokemon?.name} id={pokemon?.id} imageUrl={pokemon?.officialArtwork} type={pokemon?.types} description={pokemon?.description} stats={pokemon?.stats}/>
            </div>
            <Footer />
        </>
    )
}
