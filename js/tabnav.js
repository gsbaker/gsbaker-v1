let indicator = document.getElementById("tabnav-indicator");
let defaultToggle = document.getElementById("default-toggle");

let defaultWidth = defaultToggle.getBoundingClientRect().right - defaultToggle.getBoundingClientRect().left;
indicator.style.width = defaultWidth + "px";

function animateIndicator(toggleElement) {
    let currentX = indicator.getBoundingClientRect().left;
    console.log("currentX: " + currentX);
    let newX = toggleElement.getBoundingClientRect().left;
    console.log("newX: " + newX);
    let translateDist = newX - currentX;
    console.log("translateDist: " + translateDist);

    let newWidth = toggleElement.getBoundingClientRect().right - toggleElement.getBoundingClientRect().left;

    indicator.style.transform = "translateX(" + translateDist + "px)";
    indicator.style.width = newWidth + "px";
}