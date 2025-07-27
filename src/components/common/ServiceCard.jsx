import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ service }) => {
    const { title, description, image, link } = service;

    return (
        <div className="flex flex-col md:flex-row bg-white rounded-xl shadow-lg overflow-hidden
                        transform transition-transform duration-300 hover:scale-105 cursor-pointer">
            <div className="md:w-1/2 flex-shrink-0">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-64 md:h-full object-cover object-center"
                />
            </div>
            <div className="md:w-1/2 p-6 flex flex-col items-center justify-center">
                <h3 className="text-3xl font-bold text-gray-800 mb-3">{title}</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-center">{description}</p>
                <Link
                    to={link || '#'} // Mặc định là '#' nếu không có link cụ thể
                    className="bg-amber-500 text-white font-semibold py-3 px-8 rounded-full
                               hover:bg-amber-600 transition-colors duration-300"
                >
                    VIEW MORE
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;