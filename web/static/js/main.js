var menuBtn = document.getElementsByClassName('menu')[0];

menuBtn.addEventListener('click', showMobileNav);

function showMobileNav(event) {
  event.stopPropagation();

  var menu = document.getElementById('menu-items');
  menu.classList.remove('hide-mobile');
  document.body.addEventListener('click', hideMobileNav);
}

function hideMobileNav() {
  var menu = document.getElementById('menu-items');
  menu.classList.add('hide-mobile');
}

