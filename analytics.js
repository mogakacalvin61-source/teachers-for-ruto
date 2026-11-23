
// =====================================
// TRM WEBSITE ANALYTICS
// =====================================

// Track membership registration clicks
document.addEventListener('click', function (event) {
    const registerButton = event.target.closest(
        '[data-analytics="registration"]'
    );

    if (registerButton && typeof gtag === 'function') {
        gtag('event', 'trm_registration_click', {
            event_category: 'Membership',
            event_label: 'Registration Button'
        });
    }

    // Track social media clicks
    const socialButton = event.target.closest(
        '[data-analytics="social"]'
    );

    if (socialButton && typeof gtag === 'function') {
        gtag('event', 'trm_social_click', {
            platform: socialButton.dataset.platform || 'unknown'
        });
    }
});