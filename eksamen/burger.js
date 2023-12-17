var burgerMenu = document.getElementById("burger_menu");

var isOpen = false;
function toggleBurgerMenu() {
  if (isOpen === false) {
    burgerMenu.classList.add("burger_menu--open");
    isOpen = true;
  } else if (isOpen === true) {
    burgerMenu.classList.remove("burger_menu--open");
    isOpen = false;
  }
}
