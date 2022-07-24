
const carrosel1 = document.getElementById("carroussel1")
const carrosel2 = document.getElementById("carroussel2")
const carrosel3 = document.getElementById("carroussel3")


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

    if (carrosel1.style.display="block") {
        
        carrosel2.style.display="block"
        carrosel1.style.display="none"
    }

    if (carrosel2.style.display="block") {
        $('#carroussel3').css('display','block')
        $('#carroussel2').css('display','none')
    }
    if (carrosel3.style.display="block") {
        $('#next').css('color','gray')
        $('#arrow-next').css('color','gray')

    }

   }

   function buttonPrev() {

}

