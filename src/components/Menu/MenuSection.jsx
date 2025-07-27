// src/components/Menu/MenuSection.jsx
import React, { useState } from 'react';
import { menuCategories } from '../../data/menuData.js';
import { useCart } from '../../contexts/CartContext'; // <-- Import useCart

const MenuSection = ({ products, user, setShowAddProductModal }) => {
    // ... (Giữ nguyên các đoạn code state, find category, filteredProducts, formatCurrency, titleContainerClass)
    const [activeTabId, setActiveTabId] = useState(menuCategories[0]?.id || 'hot-combo');
    const currentActiveTab = menuCategories.find(tab => tab.id === activeTabId);
    const activeTabName = currentActiveTab ? currentActiveTab.name : 'Hot Combo';

    const filteredProducts = products && Array.isArray(products)
        ? products.filter(product => {
            const productCategoryNormalized = product.category ? product.category.toLowerCase() : '';
            const activeTabIdNormalized = activeTabId.toLowerCase();
            return productCategoryNormalized === activeTabIdNormalized;
        })
        : [];

    const titleContainerClass = user && user.role === 'admin'
        ? "flex justify-between items-center mb-8 px-4"
        : "flex justify-center items-center mb-8 px-4";

    const formatCurrency = (amount) => {
        if (typeof amount !== 'number' || isNaN(amount)) {
            return 'N/A';
        }
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
            maximumFractionDigits: 0,
        }).format(amount);
    };

    // Lấy hàm addToCart từ CartContext
    const { addToCart, loading: cartLoading } = useCart(); // <-- Lấy addToCart và cartLoading

    return (
        <section className="py-12 bg-gray-50">
            <div className="container mx-auto px-4">
                {/* Tabs / Category Navigation with Images */}
                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {menuCategories.map(tab => (
                        <button
                            key={tab.id}
                            onClick={() => setActiveTabId(tab.id)}
                            className={`
                                flex flex-col items-center justify-center
                                p-3 sm:p-4 rounded-xl border-2
                                text-lg font-medium transition-all duration-300 transform
                                hover:scale-105 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#FF9800]

                                ${activeTabId === tab.id
                                ? 'bg-[#FF9800] text-white border-[#FF9800] shadow-md'
                                : 'bg-white text-gray-700 border-gray-200 hover:border-[#FF9800] hover:text-[#FF9800]'}
                                min-w-[80px] h-[90px] sm:min-w-[100px] sm:h-[110px] md:min-w-[120px] md:h-[130px]
                            `}
                        >
                            <img
                                src={tab.icon}
                                alt={tab.name}
                                className="w-10 h-10 sm:w-12 sm:h-12 mb-1 object-contain"
                            />
                            <span className="text-xs sm:text-sm font-semibold text-center">{tab.name}</span>
                        </button>
                    ))}
                </div>

                {/* Tiêu đề phần sản phẩm và nút Admin */}
                <div className={titleContainerClass}>
                    <h2 className="text-4xl font-extrabold text-[#333] tracking-tight">
                        OUR {activeTabName.toUpperCase()}
                    </h2>
                    {user && user.role === 'admin' && (
                        <button
                            onClick={() => setShowAddProductModal(true)}
                            className="bg-[#FF9800] hover:bg-[#E68A00] text-white font-bold py-2 px-4 rounded-lg shadow-md transition duration-300 text-sm md:text-base"
                        >
                            + Add New Product
                        </button>
                    )}
                </div>

                {/* Grid hiển thị sản phẩm */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map(product => (
                            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl">
                                <img
                                    src={product.image}
                                    alt={product.name}
                                    className="w-full h-48 object-cover object-center"
                                />
                                <div className="p-5">
                                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h3>
                                    <p className="text-gray-600 text-sm mb-3">{product.description}</p>
                                    <div className="flex justify-between items-center">
                                        <p className="text-2xl font-bold text-[#FF9800]">
                                            {formatCurrency(product.price)}
                                        </p>
                                        <button
                                            onClick={() => addToCart(product)} // <-- Gọi addToCart với đối tượng sản phẩm
                                            className="bg-[#4CAF50] hover:bg-[#45a049] text-white font-bold py-2 px-4 rounded-full transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                            disabled={cartLoading} // Vô hiệu hóa nút khi đang có thao tác giỏ hàng
                                        >
                                            Add to Cart
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="col-span-full text-center text-gray-500 text-lg">Không tìm thấy sản phẩm nào trong danh mục này.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default MenuSection;