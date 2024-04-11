import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import useFetchAllPokemons from "@/hooks/useFetchAllPokemons";


const SearchBar = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const { pokemons, loading } = useFetchAllPokemons(0, 151);
    const router = useRouter();

    useEffect(() => {
        if (searchTerm === '') {
            setSearchResults([]);
        } else {
            setSearchResults(pokemons.filter(pokemon => pokemon.name.includes(searchTerm)).slice(0, 10));
        }
    }, [searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSearchSubmit = (event) => {
        event.preventDefault();
        onSearch(searchTerm);
    };

    const handleSearchResultClick = (pokemonName, pokeId) => {
        setSearchTerm(pokemonName);
        setSearchResults([]);
        onSearch(pokemonName);
        router.push(`/pokemon/${pokeId}`)
    };

    return (
        <form onSubmit={handleSearchSubmit} className="flex items-center">
            <div className="relative">
                <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input type="text" value={searchTerm} onChange={handleSearchChange} placeholder="Search your favourite pokémon!" className="h-10 w-96 px-12 rounded-2xl pl-10" />
                {searchResults.length > 0 && (
                    <div className="absolute left-0 mt-2 w-full rounded-md shadow-lg bg-white z-10">
                        {searchResults.map((pokemon) => (
                            <div key={pokemon.id} onClick={() => handleSearchResultClick(pokemon.name, pokemon.id)} className="cursor-pointer p-4 hover:bg-gray-200">
                                {pokemon.name}
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </form>
    );
};

export default SearchBar;