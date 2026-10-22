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

// メニュー内のリンクをクリックしたらメニューを閉じる

const headerLinks = document.querySelectorAll(".header__nav a");

headerLinks.forEach((link) => {

  link.addEventListener("click", () => {

    menuButton.setAttribute("aria-expanded", "false");

    menuButton.setAttribute("aria-label", "メニューを開く");

    document.querySelector(".header").classList.remove("is-open");

  });

});