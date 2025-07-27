// src/App.jsx
import './index.css';
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Import Context Providers
import { AuthProvider } from './contexts/AuthContext';
import { CartProvider } from './contexts/CartContext';

// Import Layout Components
import Header from "./components/Layout/Header.jsx";
import Footer from "./components/Layout/Footer.jsx";

// Import Client Pages
import HomePage from "./pages/Client/HomePage.jsx";
import MenuPage from "./pages/Client/MenuPage.jsx";
import ServicePage from './pages/Client/ServicePage.jsx';
import PromotionPage from './pages/Client/PromotionPage.jsx';
import ContactPage from './pages/Client/ContactPage.jsx';
// Import các trang khác của bạn nếu cần
import OrderHistoryPage from './pages/Client/OrderHistoryPage.jsx';
import ReceiptDetailPage from './pages/Client/ReceiptDetailPage.jsx';
import HelpCenterPage from './pages/Client/HelpCenterPage.jsx';

// Import CartOverlay component
import CartOverlay from './components/Cart/CartOverlay.jsx';

// MỚI: Import LoginForm và RegisterForm (đã sửa đổi để hoạt động như modal)
import LoginForm from './components/Auth/LoginForm.jsx';
import RegisterForm from './components/Auth/RegisterForm.jsx';


function App() {
    const [showLoginForm, setShowLoginForm] = useState(false);
    const [showRegisterForm, setShowRegisterForm] = useState(false);
    const [showCartOverlay, setShowCartOverlay] = useState(false); // State cho Cart Overlay

    // Hàm cho LoginForm
    const handleOpenLoginForm = () => setShowLoginForm(true);
    const handleCloseLoginForm = () => setShowLoginForm(false);

    // Hàm cho RegisterForm
    const handleOpenRegisterForm = () => setShowRegisterForm(true);
    const handleCloseRegisterForm = () => setShowRegisterForm(false);

    // Hàm chuyển đổi giữa Login và Register
    const handleSwitchToRegister = () => {
        setShowLoginForm(false);
        setShowRegisterForm(true);
    };
    const handleSwitchToLogin = () => {
        setShowRegisterForm(false);
        setShowLoginForm(true);
    };

    // Hàm cho Cart Overlay
    const handleOpenCartOverlay = () => setShowCartOverlay(true);
    const handleCloseCartOverlay = () => setShowCartOverlay(false);


    return (
        <Router>
            <AuthProvider>
                <CartProvider>
                    <div className="flex flex-col min-h-screen">
                        {/* Header truyền cả onCartClick và onAccountClick */}
                        <Header
                            onCartClick={handleOpenCartOverlay}
                            onAccountClick={handleOpenLoginForm} // Truyền hàm mở LoginForm
                        />

                        <main className="flex-grow">
                            <Routes>
                                <Route path="/" element={<HomePage />} />
                                <Route path="/menu" element={<MenuPage />} />
                                <Route path="/service" element={<ServicePage />} />
                                <Route path="/promotion" element={<PromotionPage />} />
                                <Route path="/contact" element={<ContactPage />} />
                                <Route path="/orders" element={<OrderHistoryPage />} />
                                <Route path="/orders/:orderId" element={<ReceiptDetailPage />} />
                                <Route path="/help" element={<HelpCenterPage />} />

                                {/* Lưu ý: Không còn Route cho /login và /register nếu dùng modal */}
                            </Routes>
                        </main>

                        <Footer />

                        {/* Render LoginForm và RegisterForm dưới dạng modal có điều kiện */}
                        {showLoginForm && (
                            <LoginForm
                                onClose={handleCloseLoginForm}
                                onSwitchToRegister={handleSwitchToRegister}
                            />
                        )}

                        {showRegisterForm && (
                            <RegisterForm
                                onClose={handleCloseRegisterForm}
                                onSwitchToLogin={handleSwitchToLogin}
                            />
                        )}

                        {/* Render CartOverlay có điều kiện */}
                        {showCartOverlay && <CartOverlay onClose={handleCloseCartOverlay} />}
                    </div>
                </CartProvider>
            </AuthProvider>
        </Router>
    );
}

export default App;