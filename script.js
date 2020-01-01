window.addEventListener("load", sidenVises);

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".container").addEventListener("touched", menuOpenClose);
    document.querySelector(".container").addEventListener("click", menuOpenClose);

}

function menuOpenClose() {
    console.log("menu pressed");
    this.classList.toggle("change");
    let x = document.querySelector("#mylinks");
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
