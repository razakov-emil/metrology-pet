const catItem = document.querySelectorAll(".oblast-primeneniya__button");
const path = document.querySelectorAll(".oblast-primeneniya__button path");
for (let i = 0; i < catItem.length; i++) {
  catItem[i].addEventListener("mouseenter", () => {
    document.querySelectorAll(".category-name>span").forEach((span) => {
      span.style.visibility = "hidden";
    });
    path.forEach((element) => {
      element.style.fill = "#888888";
    });
    catItem[i].querySelectorAll("path").forEach((svg) => {
      svg.style.fill = "#e12126";
    });
    document.querySelector("#category-name" + (i + 1)).style.visibility =
      "visible";
  });
}
