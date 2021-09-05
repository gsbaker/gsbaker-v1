function copyAccountNumber() {
    navigator.clipboard.writeText("36319538");
    button = document.getElementsByClassName("btn")[0];
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-outline-success");
    button.textContent = "Copied ✅";
}

function copySortCode() {
    navigator.clipboard.writeText("601251");
    button = document.getElementsByClassName("btn")[1];
    button.classList.remove("btn-outline-dark");
    button.classList.add("btn-outline-success");
    button.textContent = "Copied ✅";
}