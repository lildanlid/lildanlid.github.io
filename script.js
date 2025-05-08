document.getElementById('theme-switcher').addEventListener('click', function () {
    const body = document.body;
    const isLightMode = body.classList.contains('light-mode');

    if (isLightMode) {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        this.textContent = 'Switch to Light Mode';
    } else {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        this.textContent = 'Switch to Dark Mode';
    }
});

document.querySelector('.dropdown-toggle').addEventListener('click', function () {
    const menu = document.querySelector('.dropdown-menu');
    menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
});
