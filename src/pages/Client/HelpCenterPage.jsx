// frontend/src/pages/Client/HelpCenterPage.jsx
import React from 'react';

const HelpCenterPage = () => {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-bold text-center text-[#B61E01] mb-8">Help Center</h1>
            <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold text-gray-800 mb-4">Frequently Asked Questions</h2>
                <div className="space-y-4">
                    {/* Example FAQ Item */}
                    <div>
                        <h3 className="text-xl font-medium text-gray-700">How do I place an order?</h3>
                        <p className="text-gray-600 mt-1">
                            You can place an order by navigating to our <Link to="/menu" className="text-[#FF9800] hover:underline">Menu page</Link>, selecting your desired items, and proceeding to checkout.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-700">What are your delivery times?</h3>
                        <p className="text-gray-600 mt-1">
                            Delivery times vary depending on your location and current demand. You will receive an estimated delivery time upon order confirmation.
                        </p>
                    </div>
                    <div>
                        <h3 className="text-xl font-medium text-gray-700">Can I modify or cancel my order?</h3>
                        <p className="text-gray-600 mt-1">
                            Order modifications or cancellations are possible within a short window after placing your order. Please contact our support team immediately.
                        </p>
                    </div>
                    {/* Add more FAQs here */}
                </div>

                <div className="mt-8 text-center">
                    <p className="text-gray-700 text-lg mb-4">Still need help?</p>
                    <Link to="/contact" className="bg-[#FF9800] text-white py-3 px-6 rounded-full font-semibold hover:bg-[#E08F00] transition-colors duration-300">
                        Contact Us
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default HelpCenterPage; // THÊM 'default' VÀO ĐÂY