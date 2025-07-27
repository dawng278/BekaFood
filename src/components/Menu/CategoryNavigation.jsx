// src/components/Menu/CategoryNavigation.jsx
import React from 'react';
import { menuCategories } from '../../data/menuData.js'; // Import dữ liệu danh mục

const CategoryNavigation = ({ activeCategory, onCategoryClick }) => {
    return (
        <nav className="w-full bg-[#FFB600] py-4 md:py-6 lg:py-8 shadow-md" aria-label="Product Categories">
            <div className="container mx-auto px-4">
                <ul className="flex flex-wrap justify-center items-center gap-4 md:gap-6 lg:gap-8">
                    {menuCategories.map((category) => (
                        <li key={category.id}>
                            <button
                                onClick={() => onCategoryClick(category.id)}
                                className={`flex flex-col items-center p-2 rounded-lg
                                            transition-all duration-300 ease-in-out
                                            ${activeCategory === category.id
                                    ? 'bg-white text-[#B61E01] shadow-lg transform scale-105'
                                    : 'text-gray-800 hover:bg-yellow-600 hover:text-white'
                                }
                                            focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-red-500 focus-visible:ring-opacity-75`}
                                aria-current={activeCategory === category.id ? 'page' : undefined}
                                role="tab"
                                aria-selected={activeCategory === category.id}
                            >
                                {category.icon && (
                                    <img
                                        src={category.icon}
                                        alt={`${category.name} icon`}
                                        className="h-10 w-10 md:h-12 md:w-12 object-contain mb-1"
                                        loading="lazy"
                                    />
                                )}
                                <span className="text-sm md:text-base font-semibold whitespace-nowrap">
                                    {category.name}
                                </span>
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default CategoryNavigation;