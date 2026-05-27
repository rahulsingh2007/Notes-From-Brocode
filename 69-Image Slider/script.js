// IMAGE SLIDER
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider);

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {
    // Update the global slideIndex to match the passed index
    if (index >= slides.length) {
        slideIndex = 0;
    } else if (index < 0) {
        slideIndex = slides.length - 1;
    } else {
        slideIndex = index;
    }

    // Hide all slides
    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    });

    // Show the active slide
    slides[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    clearInterval(intervalId); // Reset timer on manual click
    slideIndex--;
    showSlide(slideIndex);
    intervalId = setInterval(nextSlide, 5000); // Restart timer
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}
