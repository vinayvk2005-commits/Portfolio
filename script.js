// ======================
// Typing Animation
// ======================

const roles = [
    "Full Stack Developer",
    "PHP Developer",
    "Java Programmer",
    "BCA Graduate 2026",
    "Web Application Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typingElement = document.querySelector(".typing");

function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingElement.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);
            return;
        }

    } else {

        typingElement.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;
            roleIndex++;

            if (roleIndex >= roles.length) {
                roleIndex = 0;
            }
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 100);
}

typeEffect();


// ======================
// Custom Cursor
// ======================

const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

});


// ======================
// Cursor Hover Effect
// ======================

const hoverElements = document.querySelectorAll(
    "a, button, .project-card, .skill"
);

hoverElements.forEach((item) => {

    item.addEventListener("mouseenter", () => {

        cursor.style.width = "40px";
        cursor.style.height = "40px";

    });

    item.addEventListener("mouseleave", () => {

        cursor.style.width = "20px";
        cursor.style.height = "20px";

    });

});


// ======================
// Navbar Scroll Effect
// ======================

const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {

    if (window.scrollY > 50) {

        navbar.style.background =
            "rgba(5,8,22,0.95)";

        navbar.style.boxShadow =
            "0 10px 30px rgba(0,198,255,.2)";

    } else {

        navbar.style.background =
            "rgba(255,255,255,.05)";

        navbar.style.boxShadow = "none";
    }

});


// ======================
// Scroll Reveal Animation
// ======================

const revealElements = document.querySelectorAll(
    ".section, .project-card, .stat-card, .skill, .timeline-item, .certificate"
);

function revealOnScroll() {

    const triggerBottom =
        window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const boxTop =
            element.getBoundingClientRect().top;

        if (boxTop < triggerBottom) {

            element.classList.add("show");

        }

    });

}

window.addEventListener(
    "scroll",
    revealOnScroll
);

revealOnScroll();


// ======================
// Active Navbar Link
// ======================

const sections =
    document.querySelectorAll("section");

const navLinks =
    document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        const sectionHeight =
            section.clientHeight;

        if (
            pageYOffset >= sectionTop
        ) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href")
            === "#" + current
        ) {

            link.classList.add("active");
        }

    });

});


// ======================
// Project Card Tilt Effect
// ======================

const cards =
    document.querySelectorAll(".project-card");

cards.forEach((card) => {

    card.addEventListener("mousemove", (e) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const rotateX =
            ((y / rect.height) - 0.5) * -12;

        const rotateY =
            ((x / rect.width) - 0.5) * 12;

        card.style.transform =
            `perspective(1000px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            translateY(-10px)`;

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform =
            "perspective(1000px) rotateX(0) rotateY(0)";

    });

});


// ======================
// Smooth Fade In
// ======================

const style = document.createElement("style");

style.innerHTML = `
.section,
.project-card,
.stat-card,
.skill,
.timeline-item,
.certificate{
opacity:0;
transform:translateY(60px);
transition:all .8s ease;
}

.show{
opacity:1 !important;
transform:translateY(0) !important;
}

.active{
color:#00c6ff !important;
}
`;

document.head.appendChild(style);


// ======================
// Page Loader Effect
// ======================

window.addEventListener("load", () => {

    document.body.style.opacity = "0";

    setTimeout(() => {

        document.body.style.transition =
            "opacity 1s";

        document.body.style.opacity = "1";

    }, 100);

});


// ======================
// Console Signature
// ======================

console.log(
"%cPortfolio Developed by Vinay Mudenagudi",
"font-size:20px;color:#00c6ff;font-weight:bold;"
);
