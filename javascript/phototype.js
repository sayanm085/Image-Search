let searchresults= document.querySelector(".imgpara");

let phototype=(data)=>{
   data.forEach((data)=>{
    
    let imageresult=document.createElement("div")
    imageresult.classList.add("imgp")
    let imagebox=document.createElement("img")
    imagebox.classList.add("imglink")
    imagebox.src=data.src.original;
    let paradiv1=document.createElement("div")
    paradiv1.classList.add("textboxtop")
    paradiv1.innerHTML=`<div class="Photographername">
    <img id="profileicon"src="./icon/icons8-male-user-48.png" alt="">
    <p>${data.photographer}</p>
   </div>`
    let paradiv=document.createElement("div")
    paradiv.classList.add("textbox")
    paradiv.innerHTML=`<div class="title">
    <p>${data.alt}</p>
   </div>
    <button class="Btn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 384 512"
          class="svgIcon"
        >
          <path
            d="M169.4 470.6c12.5 12.5 32.8 12.5 45.3 0l160-160c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L224 370.8 224 64c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 306.7L54.6 265.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l160 160z"
          ></path>
        </svg>
        <span class="icon2"></span>
      </button>`

   



     searchresults.appendChild(imageresult);
     imageresult.appendChild(imagebox);
     imageresult.appendChild(paradiv1);
     imageresult.appendChild(paradiv);

     imgbox.style.display="block"
     videodiv.style.display="none"
     
   });
}
