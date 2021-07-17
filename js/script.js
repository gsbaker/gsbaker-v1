let bar = document.getElementById("tabnav-bar");
let indicator = document.getElementById("tabnav-indicator");
let defaultToggle = document.getElementById("default-toggle");

let defaultWidth = defaultToggle.getBoundingClientRect().right - defaultToggle.getBoundingClientRect().left;
indicator.style.width = defaultWidth + "px";

function animateIndicator(toggleElement) {
    // remove active class from current toggle
    let activeElements = document.getElementsByClassName("active");
    let prevToggle = activeElements[0];
    prevToggle.classList.remove("active");

    let currentX = bar.getBoundingClientRect().left;
    console.log("currentX: " + currentX);
    let newX = toggleElement.getBoundingClientRect().left;
    console.log("newX: " + newX);
    let translateDist = newX - currentX;
    console.log("translateDist: " + translateDist);

    let newWidth = toggleElement.getBoundingClientRect().right - toggleElement.getBoundingClientRect().left;

    indicator.style.transform = "translateX(" + translateDist + "px)";
    indicator.style.width = newWidth + "px";
    toggleElement.classList.add("active");
}

function toggleDescription(event) {
    var target = event.target.getAttribute("data-section");
    var descriptions = document.getElementsByClassName("description");

    for (var i = 0; i < descriptions.length; i++) {
        var description = descriptions[i];
        if (description.classList.contains(target)) {
            description.classList.remove("hidden");
        } else  {
            description.classList.add("hidden");
        }
    }
}

var toggles = document.getElementsByClassName("description-toggle");

for(var k = 0; k < toggles.length; k++) {
    var toggle = toggles[k];
    toggle.addEventListener("click", toggleDescription);
}

var timer = setInterval(nextImage, 6000);
var curImage = 0;
var numImages = 6;

function nextImage() {
    var e;
    // remove showMe class from current image
    e = document.getElementById("slide-img-" + curImage);
    removeClass(e, "showMe");

    // compute next image
    curImage++;
    if (curImage > numImages - 1) {
        curImage = 0;
    }

    // add showMe class to next image
    e = document.getElementById("slide-img-" + curImage);
    addClass(e, "showMe");
}

function addClass(elem, name) {
    var c = elem.className;
    if (c) c += " ";  // if not blank, add a space separator
    c += name;
    elem.className = c;
}

function removeClass(elem, name) {
    var c = elem.className;
    elem.className = c.replace(name, "").replace(/\s+/g, " ").replace(/^\s+|\s+$/g, "");  // remove name and extra blanks
}
