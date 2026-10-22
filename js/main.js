const menuButton = document.querySelector(".header__menu-button");
const headerNav = document.querySelector(".header__nav");

menuButton.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", !isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを開く" : "メニューを閉じる"
  );

  document.querySelector(".header").classList.toggle("is-open", !isOpen);
});