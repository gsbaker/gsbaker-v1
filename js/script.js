function toggleDescription(toggle) {
    let description = document.getElementById("description");
    let shortDescription = "<p> Hi there! My name is George. I'm a computer science student at the" +
        " University of Birmingham. I enjoy photography, design, alternative/indie music," +
        " films and building cool projects (like this).</p>";
    let longDescription = "<p> Hello there! 👋🏻 My name is George Baker. I am the most amazing person that you'll " +
        "ever meet. I study computer science at the University" +
        " of Birmingham and also work on my own projects like this fantastic website.</p>" +
        "<p>In my spare time, I enjoy photography, designing things, listening to alternative/indie" +
        " music, watching films/TV series and organising stuff! I'm also a keen runner and an avid " +
        "<a href='https://www.wba.co.uk'>West Bromwich Albion</a> supporter.</p>" +
        "<p>You can find me on social media using the links above. If you want to get in touch, don't be " +
        "shy! You can reach me best by sending me an email or a DM on LinkedIn or Twitter. 😃</p>";
    let speakerDescription = "Hi there."

    if (toggle.id === "long-toggle") {
        description.innerHTML = longDescription;
        toggle.classList.remove("btn-outline-dark");
        toggle.classList.add("btn-dark");
        document.getElementById("short-toggle").classList.remove("btn-dark");
        document.getElementById("short-toggle").classList.add("btn-outline-dark");
        document.getElementById("speaker-toggle").classList.remove("btn-dark");
        document.getElementById("speaker-toggle").classList.add("btn-outline-dark");
    } else if (toggle.id === "speaker-toggle") {
        description.innerHTML = speakerDescription;
        toggle.classList.remove("btn-outline-dark");
        toggle.classList.add("btn-dark");
        document.getElementById("short-toggle").classList.remove("btn-dark");
        document.getElementById("short-toggle").classList.add("btn-outline-dark");
        document.getElementById("long-toggle").classList.remove("btn-dark");
        document.getElementById("long-toggle").classList.add("btn-outline-dark");
    } else if (toggle.id === "short-toggle") {
        description.innerHTML = shortDescription;
        toggle.classList.remove("btn-outline-dark");
        toggle.classList.add("btn-dark");
        document.getElementById("long-toggle").classList.remove("btn-dark");
        document.getElementById("long-toggle").classList.add("btn-outline-dark");
        document.getElementById("speaker-toggle").classList.remove("btn-dark");
        document.getElementById("speaker-toggle").classList.add("btn-outline-dark");
    } else {
        console.log("Error: a button was clicked that does not correspond to a text toggle for the description.")
    }
}