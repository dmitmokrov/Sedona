var menuToggler = document.querySelector(".main-nav__toggle");
var menu = document.querySelector(".main-nav__list");
var mainNav = document.querySelector(".main-nav");

svg4everybody();

// Открытие/закрытие меню в мобильной версии

mainNav.classList.remove("no-js");

if (menuToggler) {
  menuToggler.addEventListener("click", function () {
    if (menu.classList.contains("js-show")) {
      menu.classList.remove("js-show");
      this.classList.remove("js-toggler-show");
    } else {
      menu.classList.add("js-show");
      this.classList.add("js-toggler-show");
    }
  });
}
