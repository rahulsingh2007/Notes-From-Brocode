// IntersectionObserver -> The Intersection Observer API in JavaScript is a built-in browser tool used to asynchronously detect when an element enters, exits, or intersects the user's visible screen (the viewport) or a specific parent element.

const images = document.querySelectorAll("img");

const observer = new IntersectionObserver(function (entries, observer) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.add("loaded");
            observer.unobserve(img);
        }
    });
}, {
    root: null,
    threshold: 0.1,
});

images.forEach(function (img) {
    observer.observe(img);
});
