let inputbuttondiv=document.querySelector(".inputbutton")
let input=document.querySelector("input")
let button = document.querySelector(".button")
let searchresults= document.querySelector(".imgpara")
let showmore=document.querySelector(".button2")


let keys="avNbGKi5tga4YDX23RdPI1V6XWq5jQ11Qo3DF23BsRVFoVWC5FvffG9A" //pexels
let page=1;

let inputData=""

        let link=()=>{
            inputData=input.value
            let url=`https://api.pexels.com/v1/search?page=${page}&per_page=12&query=${inputData}`
            return url
        }


let info= async()=>{
    let respons= await fetch(link(),{
        headers: {
          Authorization:keys
        }
      })
    
   let filter= await respons.json()
   let data=filter.photos

   console.log(filter)
   console.log(data)

   if(page==1){
    searchresults.innerHTML=''
   }

   data.forEach((data)=>{
    

    let imageresult=document.createElement("div")
    imageresult.classList.add("imgp")
    let imagebox=document.createElement("img")
    imagebox.src=data.src.original;
    let paradiv=document.createElement("div")
    paradiv.classList.add("textbox")
    let altpara=document.createElement("p")
    altpara.innerText=data.alt



    searchresults.appendChild(imageresult)
     imageresult.appendChild(imagebox);
     imageresult.appendChild(paradiv);
     paradiv.appendChild(altpara)
     
   });

  
  if(page=>1){
    showmore.style.display="block"
  }
}

showmore.addEventListener("click",()=>{
  page++
  info()

})

  button.addEventListener('click',(inputData)=>{
    if(input.value!=""){
      info()
    }
    else if (input.value=="") {
      console.log(false)
    } 
  })


  // Version code 0.1 -  Create by sayanthecoder😁😁😁😁   16/05/2024.  21:44  india




  