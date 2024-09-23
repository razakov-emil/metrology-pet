const gridDet = document.querySelector(".grid_details");
const gridItem = document.querySelectorAll(".grid_details-cell");
delete gridItem[0];
for (let i = 1; i < gridItem.length; i++) {
  gridItem[i].addEventListener("mouseenter", () => {
    const bgImg = getComputedStyle(gridItem[i]).backgroundImage;
    gridDet.style.backgroundImage = bgImg;
    gridItem.forEach((cell) => {
      cell.style.background = "none";
      cell.style.borderBottom = "solid 1px #ffffff";
      cell.style.borderRight = "solid 1px #ffffff";
    });
    gridItem[i].style.background = "#1b3387";
  });
  gridItem[i].addEventListener("mouseleave", () => {
    gridDet.style.backgroundImage = "";
    gridItem[i].style.background = "";
    gridItem.forEach((cell) => {
      cell.style.background = "";
      cell.style.border = "";
    });
  });
}
