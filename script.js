const forma = document.querySelector(".forma").style;
const fGeometricas = document.querySelectorAll("#fGeometricas");
const inputTodasBordas = document.querySelector("#todasBordas");
const inputBordasSeparadas = document.querySelectorAll(".input input");

for (let formas of fGeometricas) {
    formas.addEventListener("click", () => {
        switch (formas.classList.value) {
            case "quadrado":
                forma.borderRadius = "";
                forma.clipPath = ""
                break;
            case "circulo":
                forma.borderRadius = "50%";
                forma.clipPath = ""
                break;
            case "triangulo":
                forma.borderRadius = "";
                forma.clipPath = "polygon(0% 100%, 50% 0%, 100% 100%)"
                break;
        }
    });
}

inputTodasBordas.addEventListener("input", () => {
    forma.borderRadius = `${inputTodasBordas.value}px`;
});

inputBordasSeparadas.forEach((borda) => {
    borda.addEventListener("input", () => {
        switch (borda.id) {
            case "topEsq":
                forma.borderTopLeftRadius = `${borda.value}px`;
                break;
            case "topDir":
                forma.borderTopRightRadius = `${borda.value}px`;
                break;
            case "botEsq":
                forma.borderBottomLeftRadius = `${borda.value}px`;
                break;
            case "botDir":
                forma.borderBottomRightRadius = `${borda.value}px`;
                break;
        }
    });
});
