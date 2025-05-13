
let slideIndex = 0;
function showSlides() {
    const slides = document.getElementsByClassName("slide");
    const dots = document.getElementsByClassName("dot");
    if (slides.length === 0 || dots.length === 0) {
        console.error("No slides or dots found in the document.");
        return;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        dots[i].classList.remove("active");
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].classList.add("active");
    setTimeout(showSlides, 3000);
}
document.addEventListener("DOMContentLoaded", () => {
    if (slides.length === 0 || dots.length === 0) {
        console.error("No slides or dots found in the document.");
        return;
    }
    showSlides(); 
});
