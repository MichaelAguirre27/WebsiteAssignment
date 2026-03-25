{% extends "index.html" %}
document.addEventListener("DOMContentLoaded", function () {
    console.log("Website loaded successfully!");


    alert("Welcome to my Bootstrap Website!");
});


function showMessage() {
    alert("Thanks for clicking! - Michael Aguirre");
}


function changeText() {
    let textElement = document.getElementById("dynamicText");
    textElement.innerHTML = "You just changed this text using JavaScript!";
}


function toggleDarkMode() {
    document.body.classList.toggle("bg-dark");
    document.body.classList.toggle("text-white");
}
