const words=["Full Stack Developer","BCA Student","Problem Solver"];
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
