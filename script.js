document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('welcome-popup');
    const overlay = document.getElementById('overlay');
    const cancelBtn = document.getElementById('cancel-btn');

     // Show popup after 2.5 seconds
    setTimeout(() => {
    popup.classList.add('active');
    overlay.classList.add('active');

    // Allow user to close it via cancel button
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            popup.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});
