document.querySelector(".product-button").onclick = function () {
  let element = document.querySelector(".footer_input");
  element.scrollIntoView({ behavior: "smooth", block: "center" });
  element.style.outline = "2px solid red";
  setTimeout(function () {
    element.style.outline = "";
  }, 2000);
};
