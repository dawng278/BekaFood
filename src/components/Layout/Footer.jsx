// src/components/Layout/Footer.jsx
import React from 'react';
import BekaLogo from '../../assets/images/logos/BEKA.png'; // Đảm bảo đường dẫn này đúng

// Import các component con và dữ liệu từ các file riêng biệt
import FooterLinkColumn from '../common/FooterLinkColumn'; // Default export
import SocialLink from '../common/SocialLink.jsx'; // Default export
import AppBadgesContainer from '../common/AppBadgesContainer'; // Default export
import { footerData, socialLinksData } from '../../data/footerData'; // Named exports từ file data

// Import các icon mạng xã hội nếu bạn không muốn dùng component AppBadge cho chúng
import FacebookIcon from '../../assets/images/logos/Facebook.png'; // Cập nhật đường dẫn thực tế
import InstagramIcon from '../../assets/images/logos/Instagram.png'; // Cập nhật đường dẫn thực tế


const Footer = () => {
    return (
        <footer className="w-full bg-[#FF9800] text-black">
            <div className="container mx-auto px-6 py-10 md:py-16 lg:py-20 max-w-7xl">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-stretch gap-8 md:gap-10 lg:gap-20">
                    {/* Cột 1: Logo và Thông tin công ty */}
                    <div className="flex flex-col items-start w-full md:w-1/2 lg:w-2/5 xl:w-1/3">
                        <img
                            src={BekaLogo}
                            alt="BEKA Logo"
                            className="mb-6 h-16 md:h-20 lg:h-24 object-contain"
                        />
                        <h2 className="text-xl md:text-2xl font-bold mb-4">BEKA VIETNAM COMPANY LIMITED</h2>
                        <address className="not-italic text-base space-y-1 md:space-y-2">
                            <p>Address: 23/34/2B Dien Bien Phu, Ward 25,</p>
                            <p>Binh Thanh District, Ho Chi Minh City, Viet Nam</p>
                            <p>Tel: <a href="tel:+842831300238" className="hover:underline">(028) 31300238</a></p>
                            <p>Switchboard: <a href="tel:+8419001907" className="hover:underline">1900 1907</a></p>
                            <p>Tax code: 0303******</p>
                            <p>Date of issue: 12/07/2023 - Place of issue: Ho Chi Minh City Tax Department</p>
                        </address>
                    </div>

                    {/* Cột 2: Các liên kết chính sách */}
                    {/* Bạn có thể chia footerLinksData thành nhiều cột nếu muốn */}
                    <FooterLinkColumn links={footerData} title="Policies" />


                    {/* Cột 3: Connect With Us & App Badges */}
                    <div className="w-full md:w-1/2 lg:w-1/4 xl:w-1/3 flex flex-col items-start md:items-end text-left md:text-right">
                        <h3 className="text-2xl md:text-3xl font-bold mb-6">CONNECT WITH US</h3>
                        <div className="flex flex-row md:flex-col space-x-6 md:space-x-0 md:space-y-4 mb-8">
                            {socialLinksData.map((social, index) => (
                                <SocialLink
                                    key={index}
                                    iconSrc={social.name === 'Facebook' ? FacebookIcon : InstagramIcon} // Chọn icon dựa trên tên
                                    altText={social.name}
                                    url={social.url}
                                    text={social.name}
                                />
                            ))}
                        </div>

                        {/* App Store & Google Play buttons */}
                        <AppBadgesContainer /> {/* Sử dụng component container cho các huy hiệu */}
                    </div>
                </div>
            </div>

            {/* Sub-footer với Copyright */}
            <div className="w-full bg-[#E08F00] py-4 md:py-5">
                <p className="text-center text-white text-sm md:text-base">© {new Date().getFullYear()} BEKA</p>
            </div>
        </footer>
    );
};

export default Footer;