let searchvideos= document.querySelector(".videopara")


let videotype=(data)=>{
    //  new js File
   data.forEach((data)=>{
    let videolink= data.video_files
   //  console.log(videolink)
    let datalink=()=>{
     if(videolink[0].height==720){
       return (videolink[0].link)
     }
     else if(videolink[1].quality=="hd"){
       
       return (videolink[1].link)
    }
    else if(videolink[2].quality=="hd"){
       
       return (videolink[2].link)
    } 
    else if(videolink[3].quality=="hd"){
       
       return (videolink[3].link)
    }
    else{
       return (videolink[0].link)
    }};
 
 
     let imageresult=document.createElement("div")
     imageresult.classList.add("videop")
     imageresult.innerHTML=
     ` <a id="videoplaybtn" href="#car">
     <img src="${data.image}" alt="">
   </a>

   <p class="videolink">${datalink()}</p>
   <div class="videobox-top">
     <div class="playbtn">
       <i class="fa-solid fa-circle-play"></i>
     </div>
     <div>
       
     </div>
    
   </div>
   <div class="videobox-down">
     <div class="Photographer-v-name">
       <img id="profileicon" src="./icon/icons8-male-user-48.png" alt="">
       <p>${data.user.name}</p>
     </div>
     <button class="Btn">
       <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512" class="svgIcon">
         <path d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"></path>
       </svg>
       <span class="icon2"></span>
     </button>
   </div>
     `
     
 
      searchvideos.appendChild(imageresult)

      videodiv.style.display="block"
      imgbox.style.display="none"

        
    });
}





// corsbut.addEventListener("click",()=>{
//   document.querySelector(".videobox").style.display="none"
// })

