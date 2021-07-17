function httpGet(url) {
    var request = new XMLHttpRequest();
    request.open("GET", url, false);
    request.send();
    return request.responseText;
}

let response = httpGet("https://api.music.apple.com/v1/catalog/us/search?term=james+brown&limit=2&types=artists,albums");
console.log(response);
console.log("Hello world!");
