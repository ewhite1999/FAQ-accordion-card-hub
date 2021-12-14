// A function which hides all open accordions
function hideAll() {
  document
    .querySelectorAll(".drop_down_title")
    .forEach((title) => title.classList.remove("dark"));
  document
    .querySelectorAll(".dropdown_arrow")
    .forEach((arrow) => arrow.classList.remove("arrow_up"));
  document
    .querySelectorAll(".drop_down_content")
    .forEach((paragraph) => paragraph.classList.add("hidden"));
}
// A function which toggles the dropdown menu
function toggleShow() {
  hideAll();
  const container = this;
  const title = container.querySelector(".drop_down_title");
  const arrow = container.querySelector(".dropdown_arrow");
  title.classList.add("dark");
  arrow.classList.add("arrow_up");
  const details = container.parentElement.querySelector(".drop_down_content");
  details.classList.remove("hidden");
}
const dropdownItem = document.querySelectorAll(".drop_down_title_container");
dropdownItem.forEach((item) => item.addEventListener("click", toggleShow));
