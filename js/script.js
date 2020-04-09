window.addEventListener("scroll", function () {
    var targetElement = document.getElementById("top-banner");
    var nav = document.getElementsByTagName("nav")[0];
    if (window.scrollY > (targetElement.offsetTop + targetElement.offsetHeight)) {
        // make nav visible
        nav.classList.remove("hidden");
        nav.classList.add("visible");

    }
    else {
        // make nav invisible
        nav.classList.remove("visible");
        nav.classList.add("hidden");
    }
});

