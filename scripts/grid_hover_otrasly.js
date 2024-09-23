const gridApp = document.querySelector(".grid_application");
const gridCell = document.querySelectorAll(".grid_application-cell");
delete gridCell[0];
for (let i = 1; i < gridCell.length; i++) {
  gridCell[i].addEventListener("mouseenter", () => {
    const bgImg = getComputedStyle(gridCell[i]).backgroundImage;
    gridApp.style.backgroundImage = bgImg;
    gridCell.forEach((cell) => {
      cell.style.background = "none";
      cell.style.borderBottom = "solid 1px #ffffff";
      cell.style.borderRight = "solid 1px #ffffff";
    });
    gridCell[i].style.background = "#1b3387";
  });
  gridCell[i].addEventListener("mouseleave", () => {
    gridApp.style.backgroundImage = "";
    gridCell[i].style.background = "";
    gridCell.forEach((cell) => {
      cell.style.background = "";
      cell.style.border = "";
    });
  });
}
