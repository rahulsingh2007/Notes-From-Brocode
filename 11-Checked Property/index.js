//.CHECKED = PROPERTY THAT DETERMINES THE CHECKED STATE OF AN HTML CHECKBOX OR RADIO BUTTON ELEMENT

const myCheck = document.getElementById(`myCheck`);
const visaBtn = document.getElementById(`visaBtn`);
const masterCard = document.getElementById(`masterCard`);
const paypalBtn = document.getElementById(`paypalBtn`);
const mySubmit = document.getElementById(`mySubmit`);
const subResult = document.getElementById(`subResult`);
const paymentResult = document.getElementById(`paymentResult`);

mySubmit.onclick = function () {
    if (myCheck.checked) {
        subResult.textContent = `You are subscribed!`
    }
    else {
        subResult.textContent = `You are not subscribed!`
    }
    if (visaBtn.checked) {
        paymentResult.textContent = `You are paying with visa.`
    }
    else if (masterCard.checked) {
        paymentResult.textContent = `You are paying with master card.`
    }
    else if (paypalBtn.checked) {
        paymentResult.textContent = `You are paying with pay pal.`
    }
    else {
        paymentResult.textContent = 'You must select a payment type.'
    }
}