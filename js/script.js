let darkModeOn = false;

function toggleDescription(toggle) {
    let description = document.getElementById("description");
    let shortDescription = "<p> Hi there! My name is George. I'm a computer science student at the" +
        " University of Birmingham. I enjoy photography, design, alternative/indie music," +
        " films and building cool projects (like this).</p>";
    let longDescription = "<p> Hello there! 👋🏻 My name is George Baker. I am the most amazing person that you'll " +
        "ever meet due to my humble attitude. I study computer science at the University" +
        " of Birmingham and also work on my own projects like this fantastic website.</p>" +
        "<p>On top of that, I run an amazing <a href='https://blog.gsbaker.uk'>blog</a> where I talk about my irrelevant thoughts. </p>" +
        "<p>In addition, I am the publicity rep for the University of Birmingham's " +
        "<a href='https://cssbham.com'>Computer Science Society</a>. " +
        "I maintain and develop our website and photograph all of our events and " +
        "promote them on social media.  If you're a Birmingham student, you should definitely join. 😉 </p>" +
        "<p>I am a huge Apple fanboy. Everything that I design is inspired by their simplicity — including " +
        "this website.</p>" +
        "<p>In my spare time, I enjoy photography, designing things, listening to alternative/indie" +
        " music, watching films/TV series and organising stuff! I'm also a keen runner and an avid " +
        "<a href='https://www.wba.co.uk'>West Bromwich Albion</a> supporter.</p>" +
        "<p>You can find me on social media using the links above. If you want to get in touch, don't be " +
        "shy; send me an email or a DM! 😃</p>";
    let speakerDescription = "<p>George is a dedicated computer science student at the University of Birmingham. " +
        "He is perhaps the most organised and tidy person that you will ever meet. George loves simplicity " +
        "and therefore obsesses over constructing everything in his life to meet this ideal. He has shown a " +
        "great dedication to the <a href='https://cssbham.com'>Computer Science Society</a> at the University of " +
        "Birmingham, now serving on its committee as publicity rep.  George runs his own <a href='https://blog.gsbaker.uk'>blog</a> where he shares" +
        " his thoughts on the most irrelevant subjects of our time. </p>"

    if (toggle.id === "long-toggle") {
        description.innerHTML = longDescription;
        toggle.classList.remove("toggle-inactive");
        toggle.classList.add("toggle-active");
        document.getElementById("short-toggle").classList.remove("toggle-active");
        document.getElementById("short-toggle").classList.add("toggle-inactive");
        document.getElementById("speaker-toggle").classList.remove("toggle-active");
        document.getElementById("speaker-toggle").classList.add("toggle-inactive");
    } else if (toggle.id === "speaker-toggle") {
        description.innerHTML = speakerDescription;
        toggle.classList.remove("toggle-inactive");
        toggle.classList.add("toggle-active");
        document.getElementById("short-toggle").classList.remove("toggle-active");
        document.getElementById("short-toggle").classList.add("toggle-inactive");
        document.getElementById("long-toggle").classList.remove("toggle-active");
        document.getElementById("long-toggle").classList.add("toggle-inactive");
    } else if (toggle.id === "short-toggle") {
        description.innerHTML = shortDescription;
        toggle.classList.remove("toggle-inactive");
        toggle.classList.add("toggle-active");
        document.getElementById("long-toggle").classList.remove("toggle-active");
        document.getElementById("long-toggle").classList.add("toggle-inactive");
        document.getElementById("speaker-toggle").classList.remove("toggle-active");
        document.getElementById("speaker-toggle").classList.add("toggle-inactive");
    } else {
        console.log("Error: a button was clicked that does not correspond to a text toggle for the description.")
    }
}

function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
    darkModeOn = !darkModeOn;

    let toggleBtn = document.getElementById("dark-mode-toggle");
    if (darkModeOn) {
        toggleBtn.classList.remove("btn-light");
        toggleBtn.classList.add("btn-dark");
        // toggleBtn.innerHTML = "Light";
    } else {
        toggleBtn.classList.remove("btn-dark");
        toggleBtn.classList.add("btn-light");
        // toggleBtn.innerHTML = "Dark";
    }
}