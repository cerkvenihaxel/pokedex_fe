import React from 'react';
import PokeType from "@/components/poketype/PokeType";
import {useRouter} from "next/navigation";

const CardItem = ({ imageUrl, title, type, id }:{imageUrl: string, title: string, type: [], id:number}) => {
    const router = useRouter();
    const handleButtonClick = () => {
        router.push(`/pokemon/${id}`);
    };
    return (
        <div className="flex items-center bg-white p-6 rounded-lg shadow-md w-64 h-42">
            <img src={imageUrl} alt={title} className="w-1/2 h-24 object-cover rounded-lg mr-4" />
            <div className="flex flex-col justify-between flex-1">
                <h2 className="text-lg font-semibold">{title}</h2>
                <div className="flex flex-wrap justify-between">
                    {type.map((item: { slot: number, type: { name: string, url: string } }, index: number) => (
                        <PokeType key={index} type={item.type.name} fontSize={'xs'} />
                    ))}
                </div>
                <button onClick={handleButtonClick} className="mt-8 px-2 py-2 bg-buttonAColor text-white text-xs rounded-lg self-end">+ Info</button>
            </div>
        </div>
    );
};

export default CardItem;