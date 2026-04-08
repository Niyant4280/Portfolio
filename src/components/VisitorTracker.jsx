import { useEffect } from 'react';

const VisitorTracker = () => {
    useEffect(() => {
        const trackView = async () => {
            // Check if already tracked in this session
            if (sessionStorage.getItem('portfolio_view_tracked')) return;

            const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;
            if (!scriptURL) return;

            try {
                // Get basic visitor data
                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const language = navigator.language;
                const screenRes = `${window.screen.width}x${window.screen.height}`;
                
                // Get IP address (using a reliable free service)
                let ipAddress = 'Unknown';
                try {
                    const ipRes = await fetch('https://api.ipify.org?format=json');
                    const ipData = await ipRes.json();
                    ipAddress = ipData.ip;
                } catch (e) {
                    console.log('IP tracking failed, proceeding with anonymous log');
                }

                // Construct full tracking URL
                const params = new URLSearchParams();
                params.append('type', 'view');
                params.append('ip', ipAddress);
                params.append('userAgent', userAgent);
                params.append('platform', platform);
                params.append('language', language);
                params.append('screen', screenRes);

                const finalURL = `${scriptURL}${scriptURL.includes('?') ? '&' : '?'}${params.toString()}`;

                // Send tracking request (no-cors for reliability)
                await fetch(finalURL, {
                    method: 'GET',
                    mode: 'no-cors'
                });

                // Mark as tracked for this session
                sessionStorage.setItem('portfolio_view_tracked', 'true');
                console.log('Portfolio view tracked successfully.');
            } catch (error) {
                // Silently fail to not disturb user experience
                console.error('Tracking failed:', error);
            }
        };

        trackView();
    }, []);

    return null; // Silent component
};

export default VisitorTracker;
