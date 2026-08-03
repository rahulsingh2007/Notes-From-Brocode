// Code Splitting -> 
const btn = document.querySelector("button");

btn.addEventListener("click", async function () {
    // Dynamically imports AND extracts the function in one clean line
    const { veryHeavy } = await import("./heavy.js");
    veryHeavy();
});
