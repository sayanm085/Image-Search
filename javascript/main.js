let inputbuttondiv=document.querySelector(".inputbutton")
let input=document.querySelector("input")
let button = document.querySelector(".Searchbutton")
let showmore=document.querySelector(".button2")
let imgbox=document.querySelector(".imgpara")
let videodiv=document.querySelector(".videopara")



let keys="avNbGKi5tga4YDX23RdPI1V6XWq5jQ11Qo3DF23BsRVFoVWC5FvffG9A" //pexels
let page=1;






document.querySelector(".imgpbtn").addEventListener("click",()=>{
  imgbox.style.display="block"
  videodiv.style.display="none"
})

document.querySelector(".videopbtn").addEventListener("click",()=>{
  videodiv.style.display="block"
  imgbox.style.display="none"
})



        let link=()=>{
          
            inputData=input.value
            let url=`https://api.pexels.com/${opsions()}/search?page=${page}&per_page=12&query=${inputData}`
            return url
        }


let info=async()=>{
    let respons= await fetch(link(),{
        headers: {
          Authorization:keys
        }
      })
    
   let filter= await respons.json()
   let photodata=filter.photos
   let videodata=filter.videos


   console.log(filter)

   if(page==1){
    searchresults.innerHTML=''
    searchvideos.innerHTML=''
   }

   if(opsions()=="v1"){
    phototype(photodata)

   }
   else if(opsions()=="videos"){
    videotype(videodata)
   }

  if(page=>1){
    showmore.style.display="block"
  }

  playvideolink()

  document.querySelector(".videopbtn").addEventListener("click",(inputData)=>{

    info()
  
  
  })
  document.querySelector(".imgpbtn").addEventListener("click",(inputData)=>{
  
  info()
  
  
  })

}







showmore.addEventListener("click",()=>{
  page++
  info()

  
})



  button.addEventListener('click',(inputData)=>{
    if(input.value!=""){
      info()
     searchresults.innerHTML=''
    searchvideos.innerHTML=''
    }
    else if (input.value=="") {
      console.log(false)
    } 
  })



  // video you play box

let playvideolink=()=>{
  let allvideo=document.querySelectorAll("#videoplaybtn")
  let videobox=document.querySelector(".videobox")
  let videomedia= document.querySelector(".videoplaybox");

  allvideo.forEach((video)=>{
    video.addEventListener("click",()=>{
      let videolink= video.parentElement.querySelector(".videolink")
      videomedia.src=`${videolink.innerText}`
      videobox.style.display="flex"
    })
  })
}




  playvideolink()

// video play code


  // Version code 0.1 -  Create by sayanthecoder😁😁😁😁   16/05/2024.  21:44  india




  