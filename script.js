document.addEventListener("DOMContentLoaded", () => {
    const loadingScreen = document.getElementById("loading-screen");
    const content = document.getElementById("content");

    // Simulate loading delay (e.g., for assets to load)
    setTimeout(() => {
        // Fade out loading screen
        loadingScreen.classList.add("hidden");

        // Fade in content
        content.classList.add("loaded");
    }, 1000); // Adjust delay as needed (1 second here)
});
