document.body.onload = createFeed();

function createFeed() {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "/assets/images", true);
    xhr.responseType = 'document';
    xhr.onload = () => {
        if (xhr.status === 200) {
            var elements = xhr.response.getElementsByTagName("a");
            for (x of elements) {
                if (x.href.match(/\.(jpe?g|png|gif)$/)) { 
                    // create a new div
                    var post = document.createElement('div');
                    post.classList.add('post');

                    let img = document.createElement("img");
                    img.src = x.href;

                    post.append(img);

                    let feed = document.getElementById('feed');
                    feed.prepend(post);
                } 
            };
        } 
        else {
            alert('Request failed. Returned status of ' + xhr.status);
        }
    }
    xhr.send()

}

