function nextSlide(){
    let currentSlide = document.getElementsByTagName("img")[0];
    let slideNumberElement = document.getElementById("slideActual");
    let totalSlidesNumber = parseInt(document.getElementById("totalSlides").textContent);

    let number = parseInt(slideNumberElement.textContent); 
    if (number < totalSlidesNumber){
        let newURL = "recursos/Diapositiva" + (number + 1) + ".jpeg";
        currentSlide.setAttribute("src", newURL);
        updateSlideNumber(slideNumberElement, "add");
    }

}

function previousSlide(){
    let currentSlide = document.getElementsByTagName("img")[0];
    let slideNumberElement = document.getElementById("slideActual");

    let number = parseInt(slideNumberElement.textContent); 
    

    if (number > 1){
        let newURL = (number > 1) ? "recursos/Diapositiva" + (number - 1) + ".jpeg": "recursos/Diapositiva1.jpeg";
        currentSlide.setAttribute("src", newURL);
        updateSlideNumber(slideNumberElement, "subtract");
    }
}

function updateSlideNumber(slideNumberElement, operation) {
    let number = parseInt(slideNumberElement.textContent);
    if (operation === 'add') {
        number++;
    } else if (operation === 'subtract') {
        number--;
    }
    slideNumberElement.textContent = number;
}


var btnAvanzar = document.getElementById("btnAvanzar");
var btnRetroceder = document.getElementById("btnRetroceder");
btnAvanzar.addEventListener("click", nextSlide, false);
btnRetroceder.addEventListener("click", previousSlide, false);

