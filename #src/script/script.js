// slider

// Burger Menu

function burgerMenu(selector) {
  let menu = $(selector);
  let button = menu.find(".burger-menu__button", ".burger-menu__button__lines");
  let links = menu.find(".burger-menu__nav__link");
  let overlay = menu.find(".burger-menu__overlay");

  button.on("click", (e) => {
    e.preventDefault();
    toggleMenu();
  });

  links.on("click", () => toggleMenu());
  overlay.on("click", () => toggleMenu());

  function toggleMenu() {
    menu.toggleClass("burger-menu__active");

    if (menu.hasClass("burger-menu__active")) {
      $("body").css("overlow", "hidden");
    } else {
      $("body").css("overlow", "visible");
    }
  }
}

burgerMenu(".burger-menu");
