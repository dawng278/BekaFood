import React from 'react';
import banner from "../../assets/images/thumbnails/banner.png";
import backgroundTexture from "../../assets/images/backgrounds/background.png";
import largeSpicyBeefBurger from "../../assets/images/thumbnails/signature.png";
import ProductCategoriesSection from '../../components/Products/ProductCategoriesSection.jsx';
import ServiceSection from '../../components/Products/ServiceSection.jsx';
import FindStoreSection from '../../components/common/FindStoreSection.jsx';

const HomePage = () => {
    return (
        <div
            // Áp dụng background cho div chính
            // Nếu bạn muốn background chỉ là màu solid, bỏ style={{...}} và thêm bg-[#F4EDD3]
            className="w-full min-h-screen bg-[#F4EDD3] bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${backgroundTexture})` }} // Hoặc xóa dòng này nếu chỉ dùng màu solid
        >
            <div className="z-40 top-0">
                <img src={banner} alt="Banner" className="w-full h-auto"/>
                <div className="container mx-auto py-20 overflow-hidden">
                    {/* Background decorative circles - các chấm tròn cam trang trí */}

                    <div
                        className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between relative z-10">
                        {/* Left Section: Text Content */}
                        <div className="text-center lg:text-left lg:w-1/2 mb-10 lg:mb-0">
                            <h2 className="text-5xl md:text-6xl lg:text-7xl text-[#B61E01] font-['DM_Serif_Text'] font-bold mb-4 leading-tight">
                                New Dishes <br/> Hot Spicey
                            </h2>
                            <p className="text-[#2D0902] text-base md:text-lg mb-8 max-w-lg mx-auto lg:mx-0">
                                A new dish that directly hits your palate with a powerful,
                                spicy kick, exquisitely prepared to deliver extreme excitement.
                                This is a true challenge for spice lovers. Don't hesitate, try it now!
                            </p>
                            <button
                                className="bg-white text-black text-xl md:text-2xl px-8 py-3 border border-black rounded-lg hover:bg-gray-100 transition-colors duration-300 shadow-md">
                                Order Now!
                            </button>
                        </div>

                        {/* Right Section: Images with Prices and Labels */}
                        <div className="lg:w-1/2 flex flex-col items-center justify-center space-y-8">
                            <img src={largeSpicyBeefBurger} alt="Large Spicy Beef Burger"
                                 className="w-full h-full object-cover"/>
                        </div>
                    </div>
                </div>
                <div className=" mx-auto px-0">
                    <ProductCategoriesSection />
                </div>
                <div className=" mx-auto px-0">
                    <ServiceSection />
                </div>
                <div className="mx-auto px-0">
                    <FindStoreSection />
                </div>
            </div>

        </div>
    );
};

export default HomePage;