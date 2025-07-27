import React from 'react';
import ServiceCard from '../../components/common/ServiceCard.jsx';

import serviceBannerImg from '../../assets/images/services/service_banner.jpg';
import kidPartyImg from '../../assets/images/services/kid_party.png';
import kidClubsImg from '../../assets/images/services/kid_clubs.png';
import bigServiceOrderImg from '../../assets/images/services/big_service_order.png';
import customerServiceImg from '../../assets/images/services/service_customer.png';


const ServicePage = () => {
    const servicesData = [
        {
            title: 'KID PARTY',
            description: 'Looking for ideas for a special birthday party for your child? Let BEKA help you create fun and memorable experiences.',
            image: kidPartyImg,
            link: '/services/kid-party' // Ví dụ về link chi tiết
        },
        {
            title: 'KID CLUBS',
            description: 'Join our exclusive sports and games club! Learn more about exciting adventures at BEKA Kid Club.',
            image: kidClubsImg,
            link: '/services/kid-clubs'
        },
        {
            title: 'BIG SERVICE ORDER',
            description: 'To serve your company, employees, family, and friends, the special discount program for large orders is created to bring delicious food and drinks to you.',
            image: bigServiceOrderImg,
            link: '/services/big-order'
        },
        {
            title: 'SERVICE',
            description: "We're always here to serve you! Our customer support, services feedback, and inquiries provide opportunities to listen to your opinions.",
            image: customerServiceImg,
            link: '/services/customer-services'
        },
    ];

    return (
        <div className="bg-gray-50 min-h-screen pt-20"> {/* Thêm pt-20 để tránh header */}
            {/* Banner Section */}
            <section
                className="relative h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center text-center bg-cover bg-center"
                style={{ backgroundImage: `url(${serviceBannerImg})` }}
                aria-label="Service Banner" // Thêm aria-label cho accessibility
            >
                {/* Overlay để chữ dễ đọc hơn */}
                <div className="absolute inset-0 bg-black opacity-40"></div>
                <div className="relative z-10 p-4">
                    {/* Vòng tròn ở giữa banner như trong ảnh image_6bce3c.png */}
                    <div className="bg-white bg-opacity-30 rounded-full w-64 h-64 md:w-80 md:h-80 flex flex-col items-center justify-center p-4 shadow-xl">
                        <h1 className="text-4xl md:text-5xl font-bold text-sky-50 tracking-wider mb-2">SERVICE</h1>
                        <p className="text-lg md:text-xl text-sky-50">ENJOY YOUR MOMENT WITH US</p>
                    </div>
                </div>
            </section>

            {/* Services Content Section */}
            <section className="container mx-auto px-4 py-12 md:py-16 lg:py-20">
                {/* Giới thiệu hoặc tiêu đề chung cho các dịch vụ */}
                <div className="text-center mb-12 md:mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">OUR SERVICES</h2>
                    <p className="text-gray-600 text-lg max-w-3xl mx-auto leading-relaxed">
                        We offer a variety of services to make your experience with us memorable and convenient.
                        Explore our offerings below!
                    </p>
                </div>

                {/* Grid các phần dịch vụ */}
                {/* Đổi grid-cols-2 trên lg để các card rộng hơn và rõ ràng hơn */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {servicesData.map((service, index) => (
                        <ServiceCard key={index} service={service} />
                    ))}
                </div>
            </section>
        </div>
    );
};

export default ServicePage;