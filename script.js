
const carrosel1 = document.getElementById("carroussel1")
const carrosel2 = document.getElementById("carroussel2")
const carrosel3 = document.getElementById("carroussel3")

carrosel1.style.display="block"
carrosel2.style.display="none"
carrosel3.style.display="none"


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

   function buttonNext() {
    carrosel2.style.transition="3s ease-out 0.2s"
    carrosel2.style.display="block"
    carrosel1.style.display="none"


   }
   
   function buttonNext2() {

    carrosel3.style.display="block"
    carrosel2.style.display="none"
   }


   function buttonPrev2() {
    carrosel2.style.display="none"
    carrosel1.style.display="block"
}


function buttonPrev3() {
    carrosel3.style.display="none"
    carrosel2.style.display="block"
}

