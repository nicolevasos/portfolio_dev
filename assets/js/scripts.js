document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.skill-bar');
    const timelineItems = document.querySelectorAll('.timeline-item');

    // Check visibility of elements
    function checkVisibility() {
        // For Progress Bars
        progressBars.forEach(bar => {
            const rect = bar.getBoundingClientRect();
            const progressBar = bar.querySelector('.progress-bar');
            const percentageText = bar.querySelector('.progress-percentage');
            
            // If the progress bar is visible in the viewport (not fully, just partially visible)
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                // If the progress bar is not already animated
                if (!bar.classList.contains('visible')) {
                    const progress = progressBar.getAttribute('data-progress');
                    
                    // Set the width of the progress bar
                    progressBar.style.width = progress;
                    percentageText.textContent = progress;
                    bar.classList.add('visible'); // Add 'visible' class to trigger animation
                }
            }
        });

        // For Timeline Items (same logic)
        timelineItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.classList.add('visible');
            }
        });
    }

    // Add scroll event listener
    window.addEventListener('scroll', checkVisibility);

    // Initial visibility check
    checkVisibility();
});
