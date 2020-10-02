let darkModeOn = false;
if (localStorage.getItem('theme')) {
    theme = localStorage.getItem('theme');

    if (theme === "dark") {
        console.log("theme is dark");
        toggleDarkMode();
    }
}

function toggleDarkMode() {
    console.log("Toggling Dark Mode");
    document.body.classList.toggle("dark-mode");
    darkModeOn = !darkModeOn;

    let toggleBtn = document.getElementById("dark-mode-toggle");
    if (darkModeOn) {
        console.log("Dark Mode On");
        toggleBtn.classList.remove("btn-light");
        toggleBtn.classList.add("btn-dark");
        localStorage.setItem('theme', "dark");
    } else {
        console.log("Dark Mode Off");
        toggleBtn.classList.remove("btn-dark");
        toggleBtn.classList.add("btn-light");
        localStorage.setItem('theme', "light");
    }
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
var numImages = 5;

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