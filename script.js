const img = document.querySelectorAll("img");
const list = document.querySelectorAll("li");

const hideContents = () => {
  img.forEach((content) => content.classList.remove("show"));
};

const hideItems = () => {
  list.forEach((item) => item.classList.remove("active"));
};

list.forEach((item, itemTwo) => {
  item.addEventListener("click", () => {
    hideContents();
    hideItems();

    item.classList.add("active");
    img[itemTwo].classList.add("show");
  });
});
