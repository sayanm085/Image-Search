let select =document.querySelector(".select");
let menu=document.querySelector(".menu")
let selectedtext=document.querySelector(".selected")
let opsion=document.querySelectorAll("li")
let srcbtn=document.querySelectorAll(".src-btn")
let li = true

select.addEventListener("click",()=>{
    
    if(li==true){
        menu.style.display="flex"
        li=false
    }

    else if(li==false){
        menu.style.display="none"
        li=true
    }

})


  opsions=()=>{
      
    if(selectedtext.innerText=="Photos"){
      return "v1";
    }

    else if(selectedtext.innerText=="Videos"){
      return "videos";
    }
    
  }


    



         opsion.forEach((text)=>{
                text.addEventListener("click",()=>{
                        selectedtext.innerHTML=text.innerHTML
                        menu.style.display="none"
                        li=true
                })
         });


         srcbtn.forEach((text)=>{
          text.addEventListener("click",()=>{
                  selectedtext.innerHTML=text.innerText
                
          })
   });





