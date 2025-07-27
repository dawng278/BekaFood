import React from 'react';
import { Link } from 'react-router-dom';

const HelpTopicCard = ({ title, icon: IconComponent, link }) => {
    return (
        <Link
            to={link}
            className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center
                       transform transition-transform duration-300 hover:scale-105 hover:shadow-xl
                       focus:outline-none focus:ring-2 focus:ring-amber-500 focus:ring-opacity-75"
            aria-label={`View details for ${title}`}
        >
            {/* Render icon component, truyền className để kiểm soát kích thước và màu sắc */}
            {IconComponent && <IconComponent className="h-12 w-12 text-amber-600 mb-2" />}
            <h3 className="text-lg font-semibold text-gray-800 mb-2">{title}</h3>
            <span className="text-amber-600 hover:text-amber-800 text-sm font-medium flex items-center group">
                View Details
                <svg className="ml-1 h-4 w-4 transform transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
            </span>
        </Link>
    );
};

export default HelpTopicCard;