const menuButton = document.querySelector(".header__menu-button");
const headerNav = document.querySelector(".header__nav");

menuButton?.addEventListener("click", () => {
  const isOpen = menuButton.getAttribute("aria-expanded") === "true";

  menuButton.setAttribute("aria-expanded", !isOpen);
  menuButton.setAttribute(
    "aria-label",
    isOpen ? "メニューを開く" : "メニューを閉じる",
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

$(window).scroll(function () {
  // fadeinクラスに対して順に処理を行う
  $(".fadein").each(function () {
    // スクロールした距離
    let scroll = $(window).scrollTop();
    // fadeinクラスの要素までの距離
    let target = $(this).offset().top;
    // 画面の高さ
    let windowHeight = $(window).height();
    // fadeinクラスの要素が画面下にきてから200px通過した
    // したタイミングで要素を表示
    if (scroll > target - windowHeight + 200) {
      $(this).css("opacity", "1");
      $(this).css("transform", "translateY(0)");
    }
  });
});
