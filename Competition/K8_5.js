document.addEventListener('DOMContentLoaded', function () {
    const videoContainer = document.querySelector('.video-container2');
    const video = document.querySelector('.k8-5-video');
    const poster = document.querySelector('.video-poster');

    // Ensure video doesn't auto-play on load
    video.pause();

    // Set up Intersection Observer
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) { // When container enters viewport
                if (!video.classList.contains('ended')) {
                    video.classList.add('playing');
                    video.play().catch(e => {
                        console.log("Autoplay prevented:", e);
                        // Fallback: show poster if autoplay fails
                        video.classList.remove('playing');
                    });
                }
            } else { // When container leaves viewport
                if (!video.ended) {
                    video.pause();
                    video.classList.remove('playing');
                    // Reset to beginning if video hasn't ended yet
                    if (!video.classList.contains('ended')) {
                        video.currentTime = 0;
                    }
                }
            }
        });
    }, {
        threshold: 0.5 // Trigger when 50% of container is visible
    });

    // Start observing the container
    observer.observe(videoContainer);

    // Handle video end event
    video.addEventListener('ended', function () {
        video.classList.add('ended');
        video.classList.remove('playing');

        // Optional: fade out video and show poster after delay
        setTimeout(() => {
            video.style.display = 'none';
            poster.style.opacity = '1';
        }, 1000); // Match the CSS transition time
    });

    // Optional: Handle video errors
    video.addEventListener('error', function () {
        console.error("Video failed to load");
        video.classList.remove('playing');
        poster.style.opacity = '1';
    });
});