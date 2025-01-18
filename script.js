const fadeIns = document.querySelectorAll('.fade-in');
window.addEventListener('scroll', () => {
    fadeIns.forEach(fade => {
        if (fade.getBoundingClientRect().top < window.innerHeight) {
            fade.classList.add('visible');
        }
    });
});

document.getElementById("contactForm").addEventListener("submit", function (event) {
    // Populate hidden fields with user input
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    document.getElementById("nameField").value = name;
    document.getElementById("emailField").value = email;
    document.getElementById("phoneField").value = phone;
    document.getElementById("messageField").value = message;

    // Optional: Show alert after form submission
    alert('Thank you for your message!');
    
    // Allow form submission
});


// Menu Toggle Functionality
document.querySelector('.menu-toggle').addEventListener('click', () => {
    document.querySelector('nav').classList.toggle('show');
});
