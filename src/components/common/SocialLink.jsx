import React from 'react';

const SocialLink = ({ iconSrc, altText, url, text }) => (
    <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Connect with us on ${altText}`}
        className="flex items-center space-x-3 group hover:text-white transition-colors duration-200"
    >
        <img src={iconSrc} alt={altText} className="h-7 w-7 md:h-8 md:w-8 object-contain"/>
        <span className="text-lg font-medium">{text}</span>
    </a>
);

export default SocialLink;