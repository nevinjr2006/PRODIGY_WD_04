document.querySelectorAll('a[href^="#"]').forEach(link=>{link.addEventListener("click",function(e){e.preventDefault();
    const target=document.querySelector(this.getAttribute("href"));
    if(target){
        target.scrollIntroView({behavior:"smooth"});
    }
});
});