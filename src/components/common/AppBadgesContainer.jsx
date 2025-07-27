import React from 'react';
import { AppBadge } from '../common/AppBadge.jsx'; // Import AppBadge component

// Import các ảnh huy hiệu (cần đảm bảo đường dẫn đúng)
import appStoreBadge from '../../assets/images/logos/appstore.png'; // Cập nhật đường dẫn thực tế
import googlePlayBadge from '../../assets/images/logos/googleplay.png'; // Cập nhật đường dẫn thực tế

const AppBadgesContainer = () => {
    return (
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-6">
            <AppBadge
                imgSrc={appStoreBadge}
                altText="Download on the App Store"
                url="https://www.apple.com/app-store/"
            />
            <AppBadge
                imgSrc={googlePlayBadge}
                altText="Get it on Google Play"
                url="https://play.google.com/store/"
            />
        </div>
    );
};

export default AppBadgesContainer;