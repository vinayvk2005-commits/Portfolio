// Smooth scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

// Typing effect
const words = ["Full Stack Developer", "BCA Student", "Web Developer"];
let i = 0, j = 0, current = "", deleting = false;

function type(){
if(i < words.length){
if(!deleting && j <= words[i].length){
current = words[i].substring(0,j++);
}
else if(deleting && j >= 0){
current = words[i].substring(0,j--);
}

document.querySelector(".typing").textContent = current;

if(j == words[i].length) deleting = true;
if(j == 0 && deleting){
deleting = false;
i++;
}
}else{
i = 0;
}

setTimeout(type,100);
}

type();
