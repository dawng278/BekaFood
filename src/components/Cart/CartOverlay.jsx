// frontend/src/components/Cart/CartOverlay.jsx
import React from 'react';
import { useCart } from '../../contexts/CartContext'; // Import CartContext để lấy dữ liệu giỏ hàng
import { FaTimes, FaMinus, FaPlus, FaTrash } from 'react-icons/fa'; // Cần cài react-icons nếu chưa có
import { Link } from 'react-router-dom'; // Dùng cho nút "Proceed to Checkout"

const CartOverlay = ({ onClose }) => {
    // Lấy dữ liệu và hàm từ CartContext
    const {
        cartItems,
        totalItems,
        totalPrice,
        updateCartItemQuantity,
        removeFromCart,
        clearCart,
        loading: cartLoading // Lấy trạng thái loading của giỏ hàng
    } = useCart();

    // Hàm định dạng tiền tệ
    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND',
            minimumFractionDigits: 0,
        }).format(amount);
    };

    return (
        // Overlay background (fixed position, semi-transparent black)
        // Khi click vào background này sẽ đóng overlay
        <div
            className="fixed inset-0 bg-black bg-opacity-50 z-[9999] flex justify-end animate-fade-in"
            onClick={onClose} // Đóng khi click ra ngoài sidebar
        >
            {/* Cart Sidebar */}
            <div
                className="relative bg-white w-full max-w-md h-full shadow-2xl overflow-y-auto
                           transform translate-x-0 transition-transform ease-out duration-300 animate-slide-in-right"
                onClick={(e) => e.stopPropagation()} // Ngăn chặn sự kiện click lan truyền ra background
            >
                {/* Header của Sidebar */}
                <div className="flex justify-between items-center p-6 border-b border-gray-200 sticky top-0 bg-white z-10">
                    <h2 className="text-2xl font-bold text-gray-800">Your Cart ({totalItems})</h2>
                    <button
                        onClick={onClose}
                        className="text-gray-500 hover:text-gray-800 transition-colors duration-200"
                        aria-label="Close cart"
                    >
                        <FaTimes className="w-6 h-6" />
                    </button>
                </div>

                {/* Danh sách sản phẩm trong giỏ hàng */}
                <div className="p-6 flex-grow">
                    {cartItems.length === 0 ? (
                        <p className="text-center text-gray-600 mt-10 text-lg">Your cart is empty.</p>
                    ) : (
                        <div className="space-y-4">
                            {cartItems.map(item => (
                                <div key={item.productId} className="flex items-center border-b pb-4 last:border-b-0">
                                    <div className="flex-shrink-0 w-20 h-20 mr-4 rounded-md overflow-hidden border border-gray-100">
                                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                                    </div>
                                    <div className="flex-grow">
                                        <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                                        <p className="text-gray-600">{formatCurrency(item.price)}</p>
                                        <div className="flex items-center mt-2">
                                            {/* Nút giảm số lượng */}
                                            <button
                                                onClick={() => updateCartItemQuantity(item.productId, item.quantity - 1)}
                                                className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                                                disabled={cartLoading || item.quantity <= 1} // Vô hiệu hóa nếu đang loading hoặc số lượng là 1
                                                aria-label="Decrease quantity"
                                            >
                                                <FaMinus />
                                            </button>
                                            <span className="mx-3 text-lg font-medium">{item.quantity}</span>
                                            {/* Nút tăng số lượng */}
                                            <button
                                                onClick={() => updateCartItemQuantity(item.productId, item.quantity + 1)}
                                                className="bg-gray-200 text-gray-700 w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-300 transition-colors duration-200"
                                                disabled={cartLoading}
                                                aria-label="Increase quantity"
                                            >
                                                <FaPlus />
                                            </button>
                                            {/* Nút xóa sản phẩm */}
                                            <button
                                                onClick={() => removeFromCart(item.productId)}
                                                className="ml-auto text-red-500 hover:text-red-700 transition-colors duration-200"
                                                aria-label="Remove item"
                                                disabled={cartLoading}
                                            >
                                                <FaTrash className="w-5 h-5" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>

                {/* Tóm tắt giỏ hàng và các nút hành động */}
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-white border-t border-gray-200 shadow-xl">
                    <div className="flex justify-between items-center text-xl font-bold mb-4">
                        <span>Total:</span>
                        <span className="text-[#B61E01]">{formatCurrency(totalPrice)}</span>
                    </div>
                    {cartItems.length > 0 && (
                        <div className="space-y-3">
                            <Link
                                to="/checkout" // Giả sử bạn có trang checkout
                                onClick={onClose} // Đóng giỏ hàng khi chuyển sang trang checkout
                                className="block w-full text-center bg-[#B61E01] text-white py-3 rounded-full font-semibold text-lg hover:bg-red-800 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={cartLoading}
                            >
                                Proceed to Checkout
                            </Link>
                            <button
                                onClick={clearCart}
                                className="w-full bg-gray-200 text-gray-700 py-3 rounded-full font-semibold text-lg hover:bg-gray-300 transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                                disabled={cartLoading}
                            >
                                Clear Cart
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default CartOverlay;