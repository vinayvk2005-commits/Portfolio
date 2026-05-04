// Smooth scroll
function scrollToSection(id){
document.getElementById(id).scrollIntoView({
behavior:"smooth"
});
}

// Typing animation
const text = ["Full Stack Developer","BCA Student","Problem Solver"];
let i=0,j=0,current="",del=false;

function type(){
if(i<text.length){
if(!del && j<=text[i].length){
current=text[i].substring(0,j++);
}
else if(del && j>=0){
current=text[i].substring(0,j--);
}

document.querySelector(".typing").textContent=current;

if(j==text[i].length) del=true;
if(j==0 && del){ del=false; i++; }
}else i=0;

setTimeout(type,100);
}
type();

// AOS init
AOS.init({
duration:1000
});
