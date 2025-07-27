import React from 'react';

export const AppBadge = ({ imgSrc, altText, url }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={altText}
        className="w-full sm:w-auto flex justify-center items-center"
    >
        <img
            src={imgSrc}
            alt={altText}
            className="h-12 md:h-14 lg:h-16 w-auto object-contain" // Kích thước lớn hơn
        />
    </a>
);