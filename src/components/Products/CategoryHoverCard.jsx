// src/components/Products/CategoryHoverCard.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const CategoryHoverCard = ({ name, defaultImg, hoverImg, linkTo }) => {
    return (
        <Link
            to={linkTo}
            className="group relative flex flex-col items-center justify-between
                       bg-[#F4EDD3] border-r border-gray-300 overflow-hidden
                       transition-colors duration-300 ease-in-out hover:bg-[#FF9800]
                       focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500 focus-visible:ring-opacity-75"
            aria-label={`View ${name} category`}
            role="link"
        >
            {/* Nội dung bên trong card, bao gồm ảnh */}
            <div className="relative w-full flex items-center justify-center
                            min-h-[180px] md:min-h-[250px] lg:min-h-[500px]
                            p-4 md:p-6 lg:p-8 // Padding around image area
                            ">
                {/* Ảnh mặc định */}
                <img
                    src={defaultImg}
                    alt={`${name} category thumbnail`}
                    className="absolute inset-0 w-full h-full object-contain
                               transform scale-90
                               transition-all duration-300 ease-in-out
                               group-hover:opacity-0 group-focus-visible:opacity-0"
                    loading="lazy"
                />
                {/* Ảnh hover */}
                <img
                    src={hoverImg}
                    alt={`${name} category thumbnail on hover`}
                    className="absolute inset-0 w-full h-full object-contain
                               opacity-0 transform scale-100
                               transition-all duration-300 ease-in-out
                               group-hover:opacity-100 group-hover:scale-105
                               group-focus-visible:opacity-100 group-focus-visible:scale-105"
                    loading="lazy"
                />
            </div>

            {/* Tên category dưới ảnh */}
            <h3 className="w-full bg-white text-xs md:text-xl font-bold text-gray-800 uppercase text-center
                           py-4 px-4 border-t border-gray-300
                           transition-colors duration-300 ease-in-out group-hover:text-red-800">
                {name}
            </h3>
        </Link>
    );
};

export default CategoryHoverCard;