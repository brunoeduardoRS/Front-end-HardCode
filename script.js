
const carrosel1 = document.getElementById("carroussel1")
const carrosel2 = document.getElementById("carroussel2")
const carrosel3 = document.getElementById("carroussel3")
const img1 = document.getElementById("texto-materia")
const img2 = document.getElementById("texto-materia2")
const img3 = document.getElementById("texto-materia3")

carrosel1.style.display="block"
carrosel2.style.display="none"
carrosel3.style.display="none"


let time = 3000,
   currentImageIndex = 0,
   images = document.querySelectorAll("#carrousel img")
   max = 3,
   txt = 0,
   tt=3;


    function nextImage(){        

        images[currentImageIndex].classList.remove("selected")                
        currentImageIndex++
        
        
        if (currentImageIndex >=max)
                currentImageIndex = 0;
                

        images[currentImageIndex].classList.add("selected")

        

    }

    function nextText(){
        txt++
        if (txt >=tt)
        txt = 0;

            if(txt=1){
                img1.style.display="block"
            }
            if(txt=2){
                img2.style.display="block"
                img1.style.display="none"
            }
            if(txt=3){
                img3.style.display="block"
                img2.style.display="none"
            }

        }



   function start(){
        setInterval(()=>{
            nextImage();
        },time)
   }

   window.addEventListener("load",start,nextText)

   function buttonNext() {
    
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

