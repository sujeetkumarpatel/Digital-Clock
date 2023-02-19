
function updateTime(){
    let h=new Date().getHours();
    let m=new Date().getMinutes();
    let s=new Date().getSeconds();
    let ampm=document.getElementById('ampm');
    if(h>=12){
        ampm.innerHTML="PM";
    }
    else{
        ampm.innerHTML="AM";
    }
    if(h>12){
        h=h-12
    }
    document.getElementById('hours').innerHTML=h;
  document.getElementById('minutes').innerHTML=m;
  document.getElementById('seconds').innerHTML=s;
 }
setInterval(updateTime,1000);

