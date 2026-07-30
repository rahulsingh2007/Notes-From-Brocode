/* function setDarkLight() {
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add("dark")
        document.body.classList.remove("light")
    } else {
        document.body.classList.add("light")
        document.body.classList.remove("dark")
    }
}
setDarkLight() */
/* window.matchMedia('(prefers-color-scheme: dark)').addEventListener("change", function () {
    setDarkLight();
}) */

let btn = document.getElementById("toggleTheme");
btn.addEventListener("click", function () {
    if (document.body.classList.contains("dark")) {
        document.body.classList.remove("dark")
        document.body.classList.add("light")

        localStorage.setItem("theme","light")
    } else {
        document.body.classList.remove("light")
        document.body.classList.add("dark")

        localStorage.setItem("theme","dark")
    }
});
document.body.classList.add(localStorage.getItem("theme"));
