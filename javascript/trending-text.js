let trendingtext=document.querySelectorAll(".trending-text");



let trendfnc=()=>{
    trendingtext.forEach((trendingtext)=>{
        trendingtext.addEventListener("click",()=>{
            input.value=trendingtext.innerText;
            info()
        })
    })
}

trendfnc()