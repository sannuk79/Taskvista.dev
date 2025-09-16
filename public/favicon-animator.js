// Animated Favicon with Color Cycling
(function() {
    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#96CEB4'];
    let currentIndex = 0;

    function createFavicon(color) {
        const svg = `<svg width="32" height="32" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
            <circle cx="16" cy="16" r="16" fill="${color}"/>
            <text x="16" y="22" font-family="Arial, sans-serif" font-size="16" font-weight="bold" text-anchor="middle" fill="white">TV</text>
        </svg>`;

        const blob = new Blob([svg], { type: 'image/svg+xml' });
        return URL.createObjectURL(blob);
    }

    function updateFavicon() {
        const favicon = document.querySelector('link[rel="icon"]');
        if (favicon) {
            const newFaviconUrl = createFavicon(colors[currentIndex]);
            favicon.href = newFaviconUrl;

            // Clean up old blob URL to prevent memory leaks
            if (favicon.dataset.oldUrl) {
                URL.revokeObjectURL(favicon.dataset.oldUrl);
            }
            favicon.dataset.oldUrl = newFaviconUrl;
        }

        currentIndex = (currentIndex + 1) % colors.length;
    }

    // Start animation when page loads
    document.addEventListener('DOMContentLoaded', function() {
        updateFavicon();
        setInterval(updateFavicon, 500); // Change every 500ms
    });
})();