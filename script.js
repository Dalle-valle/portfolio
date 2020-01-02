window.addEventListener("load", sidenVises);


// Når siden loades tilføjes der 2 eventlisteners til menuen. En til touch og en til klik som kalder funktionen der åbner og lukker menuen.

function sidenVises() {
    console.log("siden vises");
    document.querySelector(".container").addEventListener("touched", menuOpenClose);
    document.querySelector(".container").addEventListener("click", menuOpenClose);

}

// Funktionen der åbner og lukker menuen. Har kaldt #mylinks for x for at simplificere. Når menuen er i display block, skal den sættes til display none, og hvis den er i none skal den display block. Dette sørger for at den altid gør den modsatte end hvad den er.

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
