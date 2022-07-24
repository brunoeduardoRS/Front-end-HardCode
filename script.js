let time = 3000,
   currentImageIndex = 0,
   images = document.querySelectorAll("#carrousel img")
   max = 3;


    function nextImage(){

        images[currentImageIndex].classList.remove("selected")        
        currentImageIndex++
        
        if (currentImageIndex >=max)
                currentImageIndex = 0;
                

        images[currentImageIndex].classList.add("selected")
    }


   function start(){
        setInterval(()=>{
            nextImage();
        },time)
   }

   window.addEventListener("load",start)