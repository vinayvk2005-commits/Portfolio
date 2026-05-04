// Smooth scroll
function scrollToSection(id) {
    document.getElementById(id).scrollIntoView({
        behavior: "smooth"
    });
}

// Typing animation
const text = ["Full Stack Developer", "BCA Student", "Web Designer"];
let i = 0;
let j = 0;
let currentText = "";
let isDeleting = false;

function type() {
    if (i < text.length) {
        if (!isDeleting && j <= text[i].length) {
            currentText = text[i].substring(0, j++);
        } else if (isDeleting && j >= 0) {
            currentText = text[i].substring(0, j--);
        }

        document.querySelector(".typing").textContent = currentText;

        if (j == text[i].length) isDeleting = true;
        if (j == 0 && isDeleting) {
            isDeleting = false;
            i++;
        }
    } else {
        i = 0;
    }

    setTimeout(type, 100);
}

type();
