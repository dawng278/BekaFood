import React from 'react';
import HelpTopicCard from '../../components/common/HelpTopicCard'; // Import component con

// Import ảnh pattern (giả định bạn có ảnh này)
import backgroundPattern from '../../assets/images/backgrounds/pattern.png'; // Đường dẫn mẫu

// --- Icon Components (có thể di chuyển ra một file riêng nếu có nhiều) ---
const AccountIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);
const OrderIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
    </svg>
);
const PaymentsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
    </svg>
);
const DeliveryIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8V4m0 8v4m-4 2h8m-4-8h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
);
const DiscountsIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M7 12l3-3 3 3 4-4M18 10H6" />
    </svg>
);
const DataSecurityIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h4c0 0 0 0 0-1L15 17m-6-5h.01M12 10V6c0-1.12.88-2 2-2h2c1.12 0 2 .88 2 2v4M12 10a4 4 0 00-4 4v4h8v-4a4 4 0 00-4-4z" />
    </svg>
);
const FaqIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.228 9.292C9.155 8.358 10.4 7.7 12 7.7c1.6 0 2.845.658 3.772 1.592l-.707.707C14.39 9.39 13.5 8.7 12 8.7c-.777 0-1.488.312-2.02.81L8.228 9.292zM12 21a9 9 0 110-18 9 9 0 010 18z" />
    </svg>
);
const CareersIcon = (props) => (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M21 13V8a2 2 0 00-2-2h-3L14 3a2 2 0 00-2-2H8a2 2 0 00-2 2v3H3a2 2 0 00-2 2v5a2 2 0 002 2h3.5l1 4h5l1-4H21a2 2 0 002-2zM9 4h6" />
    </svg>
);
// --- Hết phần Icon Components ---

const ContactPage = () => {
    // Dữ liệu cho các hộp thông tin hỗ trợ
    const helpTopicsData = [
        { title: 'Account & Profile', icon: AccountIcon, link: '/help/account' },
        { title: 'Order Management', icon: OrderIcon, link: '/help/orders' },
        { title: 'Payments', icon: PaymentsIcon, link: '/help/payments' },
        { title: 'Delivery & Pickup', icon: DeliveryIcon, link: '/help/delivery' },
        { title: 'Discounts & Promotions', icon: DiscountsIcon, link: '/help/promotions' },
        { title: 'Data Privacy & Security', icon: DataSecurityIcon, link: '/help/privacy' },
        { title: 'Frequently Asked Questions (FAQs)', icon: FaqIcon, link: '/help/faqs' },
        { title: 'Careers at BEKA', icon: CareersIcon, link: '/careers' },
    ];

    return (
        <div className="bg-[#F4EDD0] min-h-screen pt-24 pb-12 relative overflow-hidden">
            {/* Background pattern */}
            {/* Giả định bạn có một ảnh pattern và đường dẫn đúng */}
            <div className="absolute inset-0 z-0 opacity-20"
                 style={{ backgroundImage: `url(${backgroundPattern})`, backgroundRepeat: 'repeat' }}
                 aria-hidden="true"> {/* aria-hidden để ẩn khỏi screen readers nếu chỉ là trang trí */}
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Header Section */}
                <hgroup className="text-center mb-12"> {/* Sử dụng hgroup cho tiêu đề và phụ đề */}
                    <h1 className="text-4xl md:text-5xl font-bold text-amber-800 mb-4 tracking-wide">
                        Welcome to BEKA's Help Center
                    </h1>
                    <p className="text-xl text-gray-700">How can I help you?</p>
                </hgroup>

                {/* Help Topics Grid */}
                <section aria-labelledby="help-topics-heading" className="mb-16">
                    {/* Không có tiêu đề riêng cho phần này trong ảnh e06a89.png, nhưng có thể thêm nếu cần */}
                    {/* <h2 id="help-topics-heading" className="sr-only">Common Help Topics</h2> */} {/* sr-only để ẩn đi nếu không muốn hiện ra */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"> {/* Đổi md: thành sm: cho responsive tốt hơn */}
                        {helpTopicsData.map((topic, index) => (
                            <HelpTopicCard
                                key={index}
                                title={topic.title}
                                icon={topic.icon}
                                link={topic.link}
                            />
                        ))}
                    </div>
                </section>

                {/* Contact Us Section */}
                <section aria-labelledby="contact-us-heading">
                    <h2 id="contact-us-heading" className="text-3xl md:text-4xl font-bold text-gray-800 mb-8 text-center md:text-left">Contact Us</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Head Office Address Card */}
                        <div className="bg-white rounded-lg shadow-md p-6">
                            <h3 className="text-2xl font-semibold text-gray-800 mb-3">Head Office</h3>
                            <address className="not-italic text-gray-700 space-y-1"> {/* Sử dụng thẻ address */}
                                <p>Address: 23/34/28 Dien Bien Phu, Ward 25,</p>
                                <p>Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
                                <p>Phone: <a href="tel:+842834309238" className="text-amber-600 hover:underline">(028) 34309238</a></p> {/* Thêm link điện thoại */}
                            </address>
                        </div>

                        {/* Contact Buttons Card */}
                        <div className="bg-white rounded-lg shadow-md p-6 flex flex-col items-start justify-center space-y-4">
                            {/* Tiêu đề này trùng lặp với ảnh e06a89.png. Nếu không cần, có thể bỏ.
                                Hoặc đổi thành "Quick Actions" hoặc "Get in Touch" cho rõ nghĩa hơn. */}
                            <h3 className="text-2xl font-semibold text-gray-800 mb-2">Quick Actions</h3> {/* Đổi tiêu đề cho rõ ràng */}
                            <button className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors duration-300 font-semibold"
                                    aria-label="Send Feedback">
                                Feedback
                            </button>
                            <button className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors duration-300 font-semibold"
                                    aria-label="Send a Message">
                                Send a Message
                            </button>
                            <button className="w-full bg-amber-500 text-white py-3 rounded-md hover:bg-amber-600 transition-colors duration-300 font-semibold"
                                    aria-label="Call Hotline">
                                Call Hotline
                            </button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default ContactPage;