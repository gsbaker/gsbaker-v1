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
