// =======================
// Loader
// =======================

window.addEventListener("load", () => {

const loader = document.querySelector(".loader");

setTimeout(() => {
loader.style.opacity = "0";

setTimeout(() => {
loader.style.display = "none";
}, 500);

}, 1200);

});


// =======================
// Typing Effect
// =======================

const roles = [
"Full Stack Developer",
"PHP Developer",
"Java Programmer",
"Web Application Developer",
"BCA Graduate 2026"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;

const typing = document.querySelector(".typing");

function typeEffect(){

const currentRole = roles[roleIndex];

if(!deleting){

typing.textContent =
currentRole.substring(0, charIndex + 1);

charIndex++;

if(charIndex === currentRole.length){

deleting = true;

setTimeout(typeEffect, 1500);

return;
}

}else{

typing.textContent =
currentRole.substring(0, charIndex - 1);

charIndex--;

if(charIndex === 0){

deleting = false;

roleIndex++;

if(roleIndex >= roles.length){
roleIndex = 0;
}

}

}

setTimeout(
typeEffect,
deleting ? 50 : 100
);

}

typeEffect();


// =======================
// Scroll Reveal
// =======================

const revealElements =
document.querySelectorAll(
".glass-card,.skill,.project-card,.stat-card,.timeline-item"
);

function reveal(){

const trigger =
window.innerHeight * 0.85;

revealElements.forEach((item)=>{

const top =
item.getBoundingClientRect().top;

if(top < trigger){

item.classList.add("show");

}

});

}

window.addEventListener(
"scroll",
reveal
);

reveal();


// =======================
// Inject Reveal CSS
// =======================

const revealStyle =
document.createElement("style");

revealStyle.innerHTML = `

.glass-card,
.skill,
.project-card,
.stat-card,
.timeline-item{

opacity:0;
transform:translateY(60px);

transition:
all .8s ease;

}

.show{

opacity:1 !important;
transform:translateY(0) !important;

}

`;

document.head.appendChild(
revealStyle
);


// =======================
// Navbar Active Link
// =======================

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".navbar a");

window.addEventListener(
"scroll",
()=>{

let current = "";

sections.forEach(section=>{

const sectionTop =
section.offsetTop - 150;

if(pageYOffset >= sectionTop){

current =
section.getAttribute("id");

}

});

navLinks.forEach(link=>{

link.classList.remove("active");

if(
link.getAttribute("href")
===
"#"+current
){

link.classList.add("active");

}

});

}
);


// =======================
// Active Link Style
// =======================

const activeStyle =
document.createElement("style");

activeStyle.innerHTML = `

.active{
color:#00e5ff !important;
}

`;

document.head.appendChild(
activeStyle
);


// =======================
// Mouse Glow
// =======================

const glow =
document.createElement("div");

glow.classList.add("mouse-glow");

document.body.appendChild(glow);

const glowStyle =
document.createElement("style");

glowStyle.innerHTML = `

.mouse-glow{

position:fixed;

width:300px;
height:300px;

border-radius:50%;

pointer-events:none;

background:
radial-gradient(
circle,
rgba(0,229,255,.15),
transparent 70%
);

transform:
translate(-50%,-50%);

z-index:-1;

}

`;

document.head.appendChild(
glowStyle
);

document.addEventListener(
"mousemove",
(e)=>{

glow.style.left =
e.clientX + "px";

glow.style.top =
e.clientY + "px";

}
);


// =======================
// 3D Card Effect
// =======================

const cards =
document.querySelectorAll(
".project-card"
);

cards.forEach(card=>{

card.addEventListener(
"mousemove",
(e)=>{

const rect =
card.getBoundingClientRect();

const x =
e.clientX - rect.left;

const y =
e.clientY - rect.top;

const rotateX =
((y / rect.height)-0.5)*-12;

const rotateY =
((x / rect.width)-0.5)*12;

card.style.transform =

`perspective(1000px)
rotateX(${rotateX}deg)
rotateY(${rotateY}deg)
translateY(-10px)`;

}
);

card.addEventListener(
"mouseleave",
()=>{

card.style.transform =
"perspective(1000px) rotateX(0deg) rotateY(0deg)";

}
);

});


// =======================
// Stats Counter
// =======================

const counters =
document.querySelectorAll(
".stat-card h2"
);

let started = false;

window.addEventListener(
"scroll",
()=>{

const stats =
document.querySelector(".stats");

if(!stats) return;

if(
window.scrollY >
stats.offsetTop - 500
&& !started
){

counters.forEach(counter=>{

const target =
parseInt(
counter.innerText
);

if(isNaN(target))
return;

let count = 0;

const update = ()=>{

count += Math.ceil(
target / 50
);

if(count < target){

counter.innerText =
count + "+";

requestAnimationFrame(update);

}else{

counter.innerText =
target + "+";

}

};

update();

});

started = true;

}

}
);


// =======================
// Console Signature
// =======================

console.log(
"%cVinay Portfolio Loaded",
"font-size:22px;color:#00e5ff;font-weight:bold;"
);
