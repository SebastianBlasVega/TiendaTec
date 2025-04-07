let slideIndex = 0;
showSlides(slideIndex);

function moveSlide(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slide");
    let totalSlides = slides.length;
    if (n >= totalSlides) { slideIndex = 0 }
    if (n < 0) { slideIndex = totalSlides - 1 }
    for (let i = 0; i < totalSlides; i++) {
        slides[i].style.display = "none";
    }
    for (let i = 0; i < 3; i++) {
        let index = (slideIndex + i) % totalSlides;
        slides[index].style.display = "block";
    }
}
