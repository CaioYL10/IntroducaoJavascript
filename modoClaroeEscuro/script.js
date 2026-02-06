function modoclaro() {
    let claro = document.getElementById("sol");

    claro.addEventListener("click", () => {
        body.classList.remove("coresescuro");
        body.classList.add("coresclaro");
        return
    });

    
}

function modoescuro() {
    let claro = document.getElementById("lua");

    claro.addEventListener("click", () => {
        body.classList.remove("coresclaro");
        body.classList.add("coresescuro");
        return
    });
}

