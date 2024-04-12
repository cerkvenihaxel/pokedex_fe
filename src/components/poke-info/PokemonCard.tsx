import React, { useState } from 'react';
import PokeType from "@/components/poketype/PokeType";

const pokemon = {
    id: 1,
    name: 'Bulbasaur',
    imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png',
    description: 'Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun’s rays, the seed grows progressively larger.',
    baseStats: 'HP: 45, Attack: 49, Defense: 49, Sp. Atk: 65, Sp. Def: 65, Speed: 45',
    evolution: 'Bulbasaur evolves into Ivysaur at level 16.'
};
const PokemonCard = ({name, imageUrl, id, type, description, stats}:{name:string, imageUrl:string, id:number,  description:string, type: { slot: number, type: { name: string, url: string } }[], stats: { base_stat: number, effort: number, stat: { name: string, url: string } }[]}) => {
    const [selectedMenu, setSelectedMenu] = useState('About');
    const renderStats = () => {
        return stats.map((stat, index) => (
            <p key={index}>{`${stat.stat.name}: ${stat.base_stat}`}</p>
        ));
    };
    const renderContent = () => {
        switch (selectedMenu) {
            case 'About':
                return <p>{description}</p>;
            case 'Base Stats':
                return renderStats();
            case 'Evolution':
                return <p>Work in progress...</p>
                //return <p>{pokemon.evolution}</p>;
            default:
                return null;
        }
    };

    return (
        <>
        <div className="card bg-white p-12 rounded-2xl shadow w-11/12">
            <div className="card-header flex justify-between items-center">
                <img src={imageUrl} width={200} height={300} alt={name} />
                <div className="flex flex-col items-center">
                    <h2 className="text-7xl font-bold">{name}</h2>
                    <div className="flex flex-wrap justify-left">
                        {type && type.map((item, index) => (
                            <PokeType key={index} type={item.type.name} fontSize={'xl'} />
                        ))}
                    </div>
                </div>
                <div className="flex flex-col items-end">
                    <p className="text-xl">#{id}</p>
                </div>
            </div>
            <div className="card-menu flex justify-between items-center px-24">
                <button className={selectedMenu === 'About' ? 'active' : ''} onClick={() => setSelectedMenu('About')}>About</button>
                <button className={selectedMenu === 'Base Stats' ? 'active' : ''} onClick={() => setSelectedMenu('Base Stats')}>Base Stats</button>
                <button className={selectedMenu === 'Evolution' ? 'active' : ''} onClick={() => setSelectedMenu('Evolution')}>Evolution</button>
            </div>
            <hr />
            <div className="card-body items-center text-center m-8">
                {renderContent()}
            </div>
        </div>
        </>
    );
};

export default PokemonCard;