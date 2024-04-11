import React from 'react';

const Pagination = ({ offset, setOffset }:{offset:any, setOffset:any}) => {
    const totalPages = 17;
    const perPage = 9;

    const handleClick = (page:number) => {
        setOffset((page - 1) * perPage);
    };

    const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

    return (
        <div className="flex justify-center">
            {pages.map((page) => (
                <button
                    key={page}
                    onClick={() => handleClick(page)}
                    className={`mx-1 px-3 py-2 rounded-lg focus:outline-none ${offset / perPage + 1 === page ? 'bg-buttonBColor text-white' : 'bg-buttonAColor text-black'}`}
                >
                    {page}
                </button>
            ))}
        </div>
    );
};

export default Pagination;