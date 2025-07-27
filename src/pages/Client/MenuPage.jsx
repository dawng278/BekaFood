// src/pages/Client/MenuPage.jsx
import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Giữ lại để dùng cho dữ liệu động
import { useAuth } from '../../contexts/AuthContext.jsx'; // Giữ lại
import MenuSection from '../../components/Menu/MenuSection';
import AddProductModal from '../Admin/AddProductModal.jsx';

// Import dữ liệu tĩnh
import { menuItems } from '../../data/menuData.js';

// ***** CẤU HÌNH QUAN TRỌNG: CHUYỂN ĐỔI GIỮA DỮ LIỆU TĨNH VÀ DỮ LIỆU ĐỘNG *****
const USE_STATIC_DATA = true; // Đặt true để dùng dữ liệu tĩnh, false để dùng API

const MenuPage = () => {
    const { user } = useAuth(); // Vẫn lấy user từ context

    const [products, setProducts] = useState([]);
    const [showAddProductModal, setShowAddProductModal] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (USE_STATIC_DATA) {
            setProducts(menuItems); // Nếu dùng dữ liệu tĩnh, gán trực tiếp
            console.log('Sử dụng dữ liệu sản phẩm tĩnh.');
        } else {
            // Logic lấy dữ liệu từ API
            const fetchProducts = async () => {
                try {
                    const res = await axios.get('http://localhost:5173/api/products');
                    // Kiểm tra cấu trúc dữ liệu trả về từ API.
                    // Nếu API trả về { data: { data: [...] } } thì dùng res.data.data
                    // Nếu API trả về { data: [...] } thì dùng res.data
                    setProducts(res.data.data); // HOẶC setProducts(res.data);
                    console.log('Đã tải sản phẩm từ API:', res.data.data); // Debug log
                } catch (err) {
                    console.error('Lỗi khi tải sản phẩm từ API:', err);
                    setError('Không thể tải sản phẩm. Vui lòng thử lại sau.');
                    setProducts([]); // Đặt về mảng rỗng nếu có lỗi
                }
            };
            fetchProducts();
        }
    }, []); // Dependency rỗng để chỉ chạy một lần khi component mount

    const handleAddProductSuccess = (newProduct) => {
        setProducts(prevProducts => [...prevProducts, newProduct]);
        setShowAddProductModal(false);
    };

    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow">
                <MenuSection
                    products={products}
                    user={user}
                    setShowAddProductModal={setShowAddProductModal}
                />
            </main>

            {/* Modal thêm sản phẩm, chỉ hiển thị nếu user là admin */}
            {user && user.role === 'admin' && showAddProductModal && (
                <AddProductModal
                    onClose={() => setShowAddProductModal(false)}
                    onProductAdded={handleAddProductSuccess}
                />
            )}
        </div>
    );
};

export default MenuPage;