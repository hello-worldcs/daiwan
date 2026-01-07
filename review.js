let lastScrollTop = 0;
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', function () {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Scroll down - sembunyikan navbar
        navbar.classList.add('hidden');
    } else {
        // Scroll up - tampilkan navbar
        navbar.classList.remove('hidden');
    }

    lastScrollTop = scrollTop;
});

