const square = document.querySelector(".square").style;
const fGeometricas = document.querySelectorAll("#fGeometricas");
const allBorders = document.querySelector("#borders-all");
const separateBorders = document.querySelectorAll(".input-border");

for (let formas of fGeometricas) {
  console.log(formas);
  formas.addEventListener("click", () => {
    switch (formas.classList.value) {
      case "btn-square":
        square.borderRadius = "";
        square.clipPath = "";
        allBorders.value = 0;
        separateBorders.forEach((borda) => {
          borda.value = 0;
        });
        break;
      case "btn-circle":
        square.borderRadius = "50%";
        square.clipPath = "";
        allBorders.value = 0;
        separateBorders.forEach((borda) => {
          borda.value = 0;
        });
        break;
      case "btn-triangle":
        square.borderRadius = "";
        square.clipPath = "polygon(0% 100%, 50% 0%, 100% 100%)";
        allBorders.value = 0;
        separateBorders.forEach((borda) => {
          borda.value = 0;
        });
        break;
    }
  });
}

allBorders.addEventListener("input", () => {
  square.borderRadius = `${allBorders.value}px`;
});

separateBorders.forEach((borda) => {
  borda.addEventListener("input", () => {
    switch (borda.id) {
      case "topEsq":
        square.borderTopLeftRadius = `${borda.value}px`;
        break;
      case "topDir":
        square.borderTopRightRadius = `${borda.value}px`;
        break;
      case "botEsq":
        square.borderBottomLeftRadius = `${borda.value}px`;
        break;
      case "botDir":
        square.borderBottomRightRadius = `${borda.value}px`;
        break;
    }
  });
});
