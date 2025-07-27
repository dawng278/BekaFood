// frontend/src/api/orderApi.js
import api from './api';

export const fetchOrderById = async (orderId, token) => {
    try {
        const response = await api.get(`/orders/${orderId}`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error(`Error fetching order ${orderId}:`, error.response?.data || error.message);
        throw error; // Ném lỗi để component xử lý
    }
};

export const fetchUserOrders = async (token) => {
    try {
        const response = await api.get('/orders/my', { // Giả sử API này trả về đơn hàng của người dùng hiện tại
            headers: {
                Authorization: `Bearer ${token}`
            }
        });
        return response.data;
    } catch (error) {
        console.error('Error fetching user orders:', error.response?.data || error.message);
        throw error;
    }
};