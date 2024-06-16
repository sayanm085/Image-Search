let sliderbtn=document.querySelector(".toggle");
let navberslider=document.querySelector(".navber-slider");

let slibtn=true;


sliderbtn.addEventListener("click",()=>{
    if(slibtn==true){
        navberslider.style.top="0"  
        slibtn=false
    }

    else  if(slibtn==false){
        navberslider.style.top="-1000px"
        slibtn=true
    }

})

