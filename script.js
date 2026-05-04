// Smooth scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({behavior:"smooth"});
}

// Typing effect
const words=["Full Stack Developer","BCA Student","Creative Coder"];
let i=0,j=0,text="",del=false;

function type(){
if(i<words.length){
if(!del && j<=words[i].length){
text=words[i].substring(0,j++);
}
else if(del && j>=0){
text=words[i].substring(0,j--);
}

document.querySelector(".typing").textContent=text;

if(j==words[i].length) del=true;
if(j==0 && del){del=false;i++;}
}else i=0;

setTimeout(type,100);
}
type();

// Custom cursor
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
cursor.style.top = e.clientY + "px";
cursor.style.left = e.clientX + "px";
});

// 3D tilt
VanillaTilt.init(document.querySelectorAll(".card"), {
max:15,
speed:400,
glare:true,
"max-glare":0.3
});
