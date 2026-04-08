import { useEffect } from 'react';

const VisitorTracker = () => {
    useEffect(() => {
        const trackView = async () => {
            // Check if already tracked in this session (unless forced via URL)
            const isForced = window.location.search.includes('track=true');
            if (sessionStorage.getItem('portfolio_view_tracked') && !isForced) {
                console.log('VisitorTracker: Already tracked in this session.');
                return;
            }

            const scriptURL = import.meta.env.VITE_GOOGLE_SHEET_URL;
            if (!scriptURL) {
                console.error('VisitorTracker: VITE_GOOGLE_SHEET_URL is not defined in .env');
                return;
            }

            console.log('VisitorTracker: Starting tracking process...');

            try {
                // Get basic visitor data
                const userAgent = navigator.userAgent;
                const platform = navigator.platform;
                const language = navigator.language;
                const screenRes = `${window.screen.width}x${window.screen.height}`;
                
                // Get IP address
                let ipAddress = 'Unknown';
                try {
                    const ipRes = await fetch('https://api.ipify.org?format=json');
                    const ipData = await ipRes.json();
                    ipAddress = ipData.ip;
                } catch (e) {
                    console.warn('VisitorTracker: IP lookup failed, logging anonymously.');
                }

                // Construct full tracking URL
                const baseUrl = scriptURL.split('?')[0]; // Clean base URL
                const queryParams = new URLSearchParams({
                    type: 'view',
                    ip: ipAddress,
                    userAgent: userAgent,
                    platform: platform,
                    language: language,
                    screen: screenRes
                });

                const finalURL = `${baseUrl}?${queryParams.toString()}`;

                console.log('VisitorTracker: Sending request to:', finalURL);

                // Send tracking request
                await fetch(finalURL, {
                    method: 'GET',
                    mode: 'no-cors',
                    cache: 'no-cache'
                });

                // Mark as tracked for this session (set BEFORE fetch in case of silent timeout)
                sessionStorage.setItem('portfolio_view_tracked', 'true');
                console.log('VisitorTracker: Successfully sent tracking request.');
            } catch (error) {
                console.error('VisitorTracker Error:', error);
            }
        };

        trackView();
    }, []);

    return null;
};

export default VisitorTracker;
