// frontend/src/contexts/AuthContext.jsx
import React, { createContext, useContext, useState, useEffect, useCallback } from 'react';
import axios from 'axios';

// Định nghĩa AuthContext
const AuthContext = createContext();

// URL cơ sở của Backend API
const API_BASE_URL = 'http://localhost:5000/api/auth'; // Changed from 5173 to 5000

export const AuthProvider = ({ children }) => {
    // Trạng thái người dùng và token
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Effect để kiểm tra token trong localStorage khi ứng dụng khởi động
    useEffect(() => {
        const loadUser = async () => {
            const storedToken = localStorage.getItem('token');
            if (storedToken) {
                setToken(storedToken);
                try {
                    // Gọi API /api/auth/me để xác thực token và lấy thông tin người dùng
                    const config = {
                        headers: {
                            Authorization: `Bearer ${storedToken}`,
                        },
                    };
                    const response = await axios.get(`${API_BASE_URL}/me`, config);
                    setUser(response.data.data); // Backend trả về { success: true, data: user }
                } catch (err) {
                    console.error('Failed to authenticate token:', err);
                    localStorage.removeItem('token'); // Xóa token cũ nếu không hợp lệ
                    setToken(null);
                    setUser(null);
                    setError('Session expired or invalid token. Please log in again.');
                }
            }
            setLoading(false);
        };
        loadUser();
    }, []);

    // Hàm đăng ký
    const register = useCallback(async (name, email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${API_BASE_URL}/register`, { name, email, password });
            const { token: newToken, user: newUser } = response.data;
            localStorage.setItem('token', newToken);
            setToken(newToken);
            setUser(newUser);
            setLoading(false);
            return { success: true };
        } catch (err) {
            console.error('Registration failed:', err.response?.data?.error || err.message);
            setError(err.response?.data?.error || 'Registration failed. Please try again.');
            setLoading(false);
            return { success: false, error: err.response?.data?.error || 'Registration failed.' };
        }
    }, []);

    // Hàm đăng nhập
    const login = useCallback(async (email, password) => {
        setLoading(true);
        setError(null);
        try {
            const response = await axios.post(`${API_BASE_URL}/login`, { email, password });
            const { token: newToken, user: newUser } = response.data;
            localStorage.setItem('token', newToken);
            setToken(newToken);
            setUser(newUser);
            setLoading(false);
            return { success: true };
        } catch (err) {
            console.error('Login failed:', err.response?.data?.error || err.message);
            setError(err.response?.data?.error || 'Login failed. Please check your credentials.');
            setLoading(false);
            return { success: false, error: err.response?.data?.error || 'Login failed.' };
        }
    }, []);

    // Hàm đăng xuất
    const logout = useCallback(async () => {
        setLoading(true);
        try {
            const config = {
                headers: {
                    Authorization: `Bearer ${token}`,
                },
            };
            await axios.get(`${API_BASE_URL}/logout`, config); // Gọi API logout Backend để xóa cookie nếu có
        } catch (err) {
            console.error('Logout API error (might be okay if token is just cleared locally):', err);
        } finally {
            localStorage.removeItem('token');
            setToken(null);
            setUser(null);
            setLoading(false);
            setError(null); // Xóa lỗi sau khi logout
        }
    }, [token]);

    const value = {
        user,
        token,
        loading,
        error,
        register,
        login,
        logout,
        isAuthenticated: !!user && !!token, // Kiểm tra người dùng đã đăng nhập chưa
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
};

// Custom Hook để sử dụng AuthContext dễ dàng hơn
export const useAuth = () => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
};