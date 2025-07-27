// frontend/src/components/Layout/Header.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import { FaShoppingCart, FaUser, FaSignOutAlt, FaSignInAlt } from 'react-icons/fa';
import { useCart } from '../../contexts/CartContext';

// Header nhận thêm prop onAccountClick để mở LoginForm
const Header = ({ onCartClick, onAccountClick }) => { // MỚI: Thêm onAccountClick
    const { isAuthenticated, user, logout } = useAuth();
    const { totalItems } = useCart();

    return (
        <header className="bg-amber-50 shadow-md py-4 px-6 md:px-10 flex justify-between items-center sticky top-0 z-50">
            {/* Logo */}
            <Link to="/" className="text-3xl font-extrabold text-[#B61E01]">
                BEKA
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex space-x-8 text-lg font-medium">
                <Link to="/" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Home</Link>
                <Link to="/menu" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Menu</Link>
                <Link to="/service" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Services</Link>
                <Link to="/promotion" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Promotions</Link>
                <Link to="/help" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Help</Link>
                <Link to="/contact" className="text-gray-700 hover:text-[#FF9800] transition-colors duration-200">Contact</Link>
            </nav>

            {/* Right section: Cart, Auth */}
            <div className="flex items-center space-x-4">
                {/* Nút giỏ hàng */}
                <button
                    onClick={onCartClick}
                    className="relative text-gray-700 hover:text-[#FF9800] transition-colors duration-200"
                    aria-label="View cart"
                >
                    <FaShoppingCart className="w-6 h-6" />
                    {totalItems > 0 && (
                        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold rounded-full h-5 w-5 flex items-center justify-center">
                            {totalItems}
                        </span>
                    )}
                </button>

                {isAuthenticated ? (
                    // Đã đăng nhập
                    <div className="relative group">
                        <button className="flex items-center text-gray-700 hover:text-[#FF9800] transition-colors duration-200">
                            <FaUser className="w-5 h-5 mr-1" />
                            {user?.name || 'User'}
                        </button>
                        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 origin-top-right">
                            <Link to="/profile" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <FaUser className="inline-block mr-2" /> Profile
                            </Link>
                            <Link to="/orders" className="block px-4 py-2 text-gray-700 hover:bg-gray-100">
                                <FaShoppingCart className="inline-block mr-2" /> My Orders
                            </Link>
                            <button
                                onClick={logout}
                                className="w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-b-md"
                            >
                                <FaSignOutAlt className="inline-block mr-2" /> Logout
                            </button>
                        </div>
                    </div>
                ) : (
                    // Chưa đăng nhập - MỚI: Nút mở LoginForm modal
                    <button
                        onClick={onAccountClick} // MỚI: Gọi prop onAccountClick
                        className="flex items-center text-gray-700 hover:text-[#FF9800] transition-colors duration-200"
                        aria-label="Login or Register"
                    >
                        <FaSignInAlt className="w-5 h-5 mr-1" /> Login
                    </button>
                )}

                {/* Mobile menu button */}
                <button className="md:hidden text-gray-700 hover:text-[#FF9800]">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                </button>
            </div>
        </header>
    );
};

export default Header;