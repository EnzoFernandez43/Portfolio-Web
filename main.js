// Abrir y cerrar sidebar
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  let opacidad = document.querySelector(".contenido");


  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  opacidad.style.opacity = "30%";
  }

  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  opacidad.style.opacity = "100%";
  }