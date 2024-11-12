const closeBtn = document.querySelector(".popup-close");
const elementCards = document.querySelectorAll(".element-box");
const popupContainer = document.querySelector(".popup-container");
const popup = document.querySelector(".popup");

/*working of popup */
closeBtn.addEventListener("click", () => {
  popupContainer.classList.remove("active");
  popup.classList.remove("active");
});

elementCards.forEach((card) => {
  card.addEventListener("click", () => {
    popupContainer.classList.add("active");
    popup.classList.add("active");
  });
});
