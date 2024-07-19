const square = document.querySelector(".square").style;
const squareBtn = document.querySelector("#square");
const triangleBtn = document.querySelector("#triangle");
const circleBtn = document.querySelector("#circle");
const allBorders = document.querySelector("#borders-all");
const separateBorders = document.querySelectorAll(".input-border");

squareBtn.addEventListener("click", () => {
  square.borderRadius = "0";
  square.clipPath = "";
  allBorders.value = 0;
  separateBorders.forEach((borda) => {
    borda.value = 0;
  });
});

triangleBtn.addEventListener("click", () => {
  square.borderRadius = "0";
  square.clipPath = "polygon(0% 100%, 50% 0%, 100% 100%)";
  allBorders.value = 0;
  separateBorders.forEach((borda) => {
    borda.value = 0;
  });
});

circleBtn.addEventListener("click", () => {
  square.borderRadius = "50%";
  square.clipPath = "";
  allBorders.value = 0;
  separateBorders.forEach((borda) => {
    borda.value = 0;
  });
});

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
