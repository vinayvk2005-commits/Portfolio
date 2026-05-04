// 1. Smooth Scroll for Navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 2. Simple Scroll Reveal Animation
// This logic checks if elements are in the viewport and adds a class to animate them
const revealOnScroll = () => {
    const reveals = document.querySelectorAll('.project-card, .glass-section');
    
    reveals.forEach(windowElement => {
        const windowHeight = window.innerHeight;
        const revealTop = windowElement.getBoundingClientRect().top;
        const revealPoint = 150; // Distance from bottom to trigger

        if (revealTop < windowHeight - revealPoint) {
            windowElement.style.opacity = "1";
            windowElement.style.transform = "translateY(0)";
            windowElement.style.transition = "all 0.8s ease-out";
        }
    });
};

// Set initial state for animations
document.querySelectorAll('.project-card, .glass-section').forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(30px)";
});

window.addEventListener('scroll', revealOnScroll);

// 3. Dynamic Title Effect
// This subtly changes the "Software Engineer" text to show your versatility
const headerText = document.querySelector('.hero p');
const phrases = ["BCA Candidate @ St Aloysius College", "PHP & MySQL Specialist", "UI/UX Design Enthusiast"];
let i = 0;

setInterval(() => {
    headerText.style.opacity = 0;
    setTimeout(() => {
        headerText.innerText = phrases[i];
        headerText.style.opacity = 1;
        i = (i + 1) % phrases.length;
    }, 500);
}, 4000);
