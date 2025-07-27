// frontend/src/pages/Client/ReceiptDetailPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';
import * as orderApi from '../../api/orderApi'; // Import orderApi
import { FaPrint, FaDownload, FaArrowLeft } from 'react-icons/fa'; // Cần cài react-icons

const ReceiptDetailPage = () => {
    const { orderId } = useParams(); // Lấy orderId từ URL
    const navigate = useNavigate();
    const { isAuthenticated, user, token } = useAuth(); // Lấy thông tin xác thực từ AuthContext

    const [order, setOrder] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getOrderDetails = async () => {
            if (!isAuthenticated || !token) {
                // Nếu chưa đăng nhập, chuyển hướng đến trang đăng nhập
                navigate('/login');
                return;
            }

            if (!orderId) {
                setError('Order ID is missing.');
                setLoading(false);
                return;
            }

            try {
                setLoading(true);
                setError(null);
                const data = await orderApi.fetchOrderById(orderId, token); // GỌI API THỰC TẾ
                setOrder(data);
            } catch (err) {
                console.error("Failed to fetch order details:", err);
                // Xử lý các loại lỗi khác nhau
                if (err.response && err.response.status === 404) {
                    setError('Order not found or you do not have permission to view it.');
                } else if (err.response && err.response.status === 401) {
                    setError('Unauthorized. Please log in again.');
                    navigate('/login'); // Chuyển hướng nếu token hết hạn hoặc không hợp lệ
                } else {
                    setError('Failed to load order details. Please try again later.');
                }
            } finally {
                setLoading(false);
            }
        };

        getOrderDetails();
    }, [orderId, isAuthenticated, token, navigate]); // Dependencies

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND', minimumFractionDigits: 0 }).format(amount);
    };

    const formatDate = (dateString) => {
        if (!dateString) return 'N/A';
        return new Date(dateString).toLocaleDateString('vi-VN', {
            year: 'numeric', month: 'long', day: 'numeric',
            hour: '2-digit', minute: '2-digit'
        });
    };

    if (loading) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-lg text-gray-600">Loading order details...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <h1 className="text-3xl font-bold text-red-600 mb-4">Error</h1>
                <p className="text-lg text-red-500">{error}</p>
                <button onClick={() => navigate(-1)} className="mt-6 inline-flex items-center px-4 py-2 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition-colors">
                    <FaArrowLeft className="mr-2" /> Back
                </button>
            </div>
        );
    }

    if (!order) {
        return (
            <div className="container mx-auto px-4 py-8 text-center">
                <p className="text-lg text-gray-600">No order found with this ID.</p>
                <button onClick={() => navigate('/orders')} className="mt-6 inline-flex items-center px-4 py-2 bg-[#FF9800] text-white rounded-md hover:bg-[#E08F00] transition-colors">
                    <FaArrowLeft className="mr-2" /> Back to Orders
                </button>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="max-w-3xl mx-auto bg-white rounded-lg shadow-xl p-8 border border-gray-100">
                <h1 className="text-4xl font-bold text-center text-[#B61E01] mb-8">Order Receipt</h1>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6 text-lg">
                    <div>
                        <p><strong className="text-gray-700">Order ID:</strong> {order._id}</p>
                        <p><strong className="text-gray-700">Order Date:</strong> {formatDate(order.createdAt || order.date)}</p> {/* createdAt nếu từ MongoDB */}
                    </div>
                    <div className="md:text-right">
                        <p><strong className="text-gray-700">Status:</strong>
                            <span className={`ml-2 px-3 py-1 rounded-full text-sm font-medium ${
                                order.status === 'Completed' ? 'bg-green-100 text-green-800' :
                                    order.status === 'Processing' ? 'bg-blue-100 text-blue-800' :
                                        'bg-gray-100 text-gray-800'
                            }`}>
                                {order.status}
                            </span>
                        </p>
                        <p><strong className="text-gray-700">Customer:</strong> {order.user?.name || user?.name || 'Guest'}</p> {/* Lấy tên người dùng từ order hoặc AuthContext */}
                    </div>
                </div>

                <hr className="my-6 border-t-2 border-gray-200" />

                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Items Ordered</h2>
                <div className="space-y-4 mb-6">
                    {order.items && order.items.length > 0 ? (
                        order.items.map((item, index) => (
                            <div key={item._id || index} className="flex justify-between items-center text-lg pb-2 border-b border-gray-100 last:border-b-0">
                                <span>{item.name} <span className="text-gray-600">x {item.quantity}</span></span>
                                <span className="font-semibold">{formatCurrency(item.quantity * item.price)}</span>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-600">No items found for this order.</p>
                    )}
                </div>

                <hr className="my-6 border-t-2 border-gray-200" />

                <div className="text-right space-y-2 mb-6">
                    <p className="text-lg"><strong className="text-gray-700">Subtotal:</strong> {formatCurrency(order.totalAmount - (order.deliveryFee || 0))}</p> {/* Giả sử có deliveryFee */}
                    {order.deliveryFee && <p className="text-lg"><strong className="text-gray-700">Delivery Fee:</strong> {formatCurrency(order.deliveryFee)}</p>}
                    <p className="text-2xl font-bold text-[#B61E01]"><strong className="text-gray-700">Grand Total:</strong> {formatCurrency(order.totalAmount)}</p>
                </div>

                <div className="flex justify-center space-x-4 mt-8">
                    <button
                        onClick={() => window.print()}
                        className="flex items-center px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-semibold hover:bg-gray-300 transition-colors duration-200"
                    >
                        <FaPrint className="mr-2" /> Print Receipt
                    </button>
                    <Link
                        to="/orders"
                        className="flex items-center px-6 py-3 bg-[#FF9800] text-white rounded-full font-semibold hover:bg-[#E08F00] transition-colors duration-200"
                    >
                        <FaArrowLeft className="mr-2" /> Back to Orders
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ReceiptDetailPage; // Đảm bảo có default export