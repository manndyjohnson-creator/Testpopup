document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const overlay = document.getElementById('overlay');
    const cancelBtn = document.getElementById('cancel-btn');

    // Show popup after 1.5 seconds
    setTimeout(() => {
        if (popup && overlay) {
            popup.classList.add('active');
            overlay.classList.add('active');
        }
    }, 1500);

    // Make the cancel button call the number instead of closing
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            window.location.href = 'tel:+12052771332';
        });
    }
});
