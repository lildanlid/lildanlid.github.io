document.addEventListener("DOMContentLoaded", () => {
    // Animate the favicon when the tab is loaded
    const favicon = document.getElementById("favicon");
    if (favicon) {
        let bounceInterval = setInterval(() => {
            favicon.classList.add("animate-favicon");

            // Remove animation after 1 second
            setTimeout(() => {
                favicon.classList.remove("animate-favicon");
            }, 1000);
        }, 2000);

        // Stop animation after 5 iterations (or adjust to your preference)
        setTimeout(() => {
            clearInterval(bounceInterval);
        }, 10000); // 10 seconds
    }
});
