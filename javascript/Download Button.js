let photodownloadbutton=document.querySelector(".photo-button-down");
let videodownloadbutton=document.querySelector(".video-button-down");
let videosrc=document.querySelector(".videoplaybox")
let imgsrc=document.querySelector(".imgplaybox")

let photodownbuttonfnc=()=>{
  photodownloadbutton.addEventListener("click",()=>{
    let a=document.createElement("a")
    a.href=`${imgsrc.src}`
    a.download =""
    a.style.display="none"
    videobox.appendChild(a);
    a.click();
  })
}



let videodownbuttonfnc=()=>{
  videodownloadbutton.addEventListener("click",()=>{
    let a=document.createElement("a")
    a.href=`${videosrc.src}`
    a.download =""
    a.style.display="none"
    videobox.appendChild(a);
    a.click();
  })
}
videodownbuttonfnc()
photodownbuttonfnc()


// I know this code is so bad.