import React from 'react';
import { Link } from 'react-router-dom'; // Sử dụng Link nếu là internal links

const FooterLinkColumn = ({ title, links }) => {
    return (
        <div className="flex flex-col items-start space-y-2">
            {title && <h4 className="text-xl font-bold text-black mb-2">{title}</h4>}
            {links.map((link, index) => (
                <div key={index}>
                    {link.isExternal ? (
                        <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-800 hover:text-red-600 transition-colors duration-200 text-sm"
                            aria-label={link.text}
                        >
                            {link.text}
                        </a>
                    ) : (
                        <Link
                            to={link.url}
                            className="text-gray-800 hover:text-red-600 transition-colors duration-200 text-sm"
                            aria-label={link.text}
                        >
                            {link.text}
                        </Link>
                    )}
                </div>
            ))}
        </div>
    );
};

export default FooterLinkColumn; // Export default cho component chính của file