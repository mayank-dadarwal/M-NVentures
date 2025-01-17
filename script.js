const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeIns.forEach(fade => {
        if (fade.getBoundingClientRect().top < window.innerHeight) {
            fade.classList.add('visible');
        }
    });
});

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Thank you for your message!');
    this.reset();
});

// Menu Toggle Functionality
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show');
});
