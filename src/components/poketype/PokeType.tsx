import React from 'react';


const PokeType = ({ type , fontSize}:{type:string, fontSize:string}) => {

    let typeStyle: string = '';

    switch (type) {
        case 'grass':
            typeStyle = 'bg-green-300';
            break;
        case 'poison':
            typeStyle = 'bg-purple-300';
            break;
        case 'fire':
            typeStyle = 'bg-red-300';
            break;
        case 'water':
            typeStyle = 'bg-blue-300';
            break;
        case 'bug':
            typeStyle = 'bg-green-300';
            break;
        case 'normal':
            typeStyle = 'bg-gray-300';
            break;
        case 'electric':
            typeStyle = 'bg-yellow-300';
            break;
        case 'ground':
            typeStyle = 'bg-yellow-300';
            break;
        case 'fairy':
            typeStyle = 'bg-pink-300';
            break;
        case 'fighting':
            typeStyle = 'bg-red-300';
            break;
        case 'psychic':
            typeStyle = 'bg-purple-300';
            break;
        case 'rock':
            typeStyle = 'bg-gray-300';
            break;
        case 'ghost':
            typeStyle = 'bg-purple-300';
            break;
        case 'ice':
            typeStyle = 'bg-blue-300';
            break;
        case 'dragon':
            typeStyle = 'bg-blue-300';
            break;
            default:
            typeStyle = 'bg-blue-200';
            break;
    }

    return (
        <span className={`${typeStyle} text-white rounded-full px-2 py-1 text-${fontSize} w-min mt-2`}>
            {type}
        </span>
    );
}

export default PokeType;