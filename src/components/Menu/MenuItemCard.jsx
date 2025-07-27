// src/components/Menu/MenuItemCard.jsx
import React from 'react';
import { useCart } from '../../contexts/CartContext'; // MỚI: Import useCart hook

const MenuItemCard = ({ item }) => { // Đã loại bỏ prop 'onAddToCart'
    const { addToCart, loading: cartLoading } = useCart(); // MỚI: Lấy hàm addToCart và trạng thái loading từ context

    const formattedPrice = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
        minimumFractionDigits: 0,
    }).format(item.price);

    const handleAddToCartClick = () => {
        // Gọi hàm addToCart từ Context, truyền vào item và số lượng (mặc định là 1)
        addToCart(item, 1);
    };

    return (
        <div className="relative bg-white rounded-lg shadow-lg overflow-hidden
                        flex flex-col items-center text-center p-4 md:p-6 lg:p-8
                        transform transition-transform duration-300 hover:scale-[1.02] hover:shadow-xl z-10">
            {/* Ảnh sản phẩm */}
            <div className="w-full h-48 md:h-48 lg:h-48 flex items-center justify-center mb-4">
                <img
                    src={item.image}
                    alt={item.name}
                    className="max-w-full max-h-full object-contain"
                    loading="lazy"
                />
            </div>

            {/* Tên sản phẩm */}
            <h3 className="text-xl md:text-xl font-bold text-gray-800 mb-2 uppercase">
                {item.name}
            </h3>

            {/* Giá sản phẩm */}
            <p className="text-xl md:text-xl font-extrabold text-[#B61E01] mb-4">
                {formattedPrice}
            </p>

            {/* Nút "Add to Cart" */}
            <button
                onClick={handleAddToCartClick} // MỚI: Gọi hàm handleAddToCartClick
                className="w-full bg-[#FF9800] text-white text-lg md:text-xl font-bold uppercase
                           py-3 px-6 rounded-full shadow-md
                           hover:bg-[#E08F00] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-amber-500 focus-visible:ring-opacity-75
                           transition-colors duration-200
                           disabled:opacity-50 disabled:cursor-not-allowed" // MỚI: Styling cho nút bị vô hiệu hóa
                aria-label={`Add ${item.name} to cart`}
                disabled={cartLoading} // MỚI: Vô hiệu hóa nút khi đang xử lý giỏ hàng
            >
                {cartLoading ? 'Adding...' : 'Add to Cart'} {/* MỚI: Thay đổi text khi đang loading */}
            </button>
        </div>
    );
};

export default MenuItemCard;