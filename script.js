window.addEventListener("load", sidenVises);


// Når siden loades tilføjes der 2 eventlisteners til menuen. En til touch og en til klik som kalder funktionen der åbner og lukker menuen.

function sidenVises() {
    console.log("siden vises");
    document.querySelector("#burger_menu").addEventListener("touched", menuOpenClose);
    document.querySelector("#burger_menu").addEventListener("click", menuOpenClose);

}

// Funktionen der åbner og lukker menuen. Har kaldt #mylinks for x for at simplificere. Når menuen er i display block, skal den sættes til display none, og hvis den er i none skal den display block. Dette sørger for at den altid gør den modsatte end hvad den er.

function menuOpenClose() {
    console.log("menu pressed");
    this.classList.toggle("burger_kryds");
    let x = document.querySelector("#mylinks");
    if (x.style.display === "block") {
        x.style.display = "none";

        document.querySelector("#burger_menu").textContent = "☰";
    } else {
        x.style.display = "block";
        document.querySelector("#burger_menu").textContent = "X";
    }
}





//Get the button

var mybutton = document.querySelector("#my_button");

window.onscroll = function () {
    scrollFunction();
};

document.querySelector("#my_button").addEventListener("click", topFunction);

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}
