/**
 * PRELOAD
 *
 * loading will be ended after document is loaded
 */

const preloader = document.querySelector("[data-preaload]");

window.addEventListener("load", function () {
  preloader.classList.add("loaded");
  document.body.classList.add("loaded");
});

/**
 * add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
};

/**
 * NAVBAR
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");
const overlay = document.querySelector("[data-overlay]");
const menu = document.querySelectorAll("a.navbar-link.hover-underline");

const toggleNavbar = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
  document.body.classList.toggle("nav-active");
};

const unoverlay = function () {
  navbar.classList.toggle("active");
  overlay.classList.toggle("active");
};

addEventOnElements(navTogglers, "click", toggleNavbar);

menu.forEach((link) => {
  link.addEventListener("click", unoverlay);
});

/**
 * HEADER
 */

const header = document.querySelector("[data-header]");

let lastScrollPos = 0;

const hideHeader = function () {
  const isScrollBottom = lastScrollPos < window.scrollY;
  if (isScrollBottom) {
    header.classList.add("hide");
  } else {
    header.classList.remove("hide");
  }

  lastScrollPos = window.scrollY;
};

window.addEventListener("scroll", function () {
  if (window.scrollY >= 50) {
    header.classList.add("active");
    hideHeader();
  } else {
    header.classList.remove("active");
  }
});

/**
 * MODALS
 */

// Get the modals
var modals = document.getElementsByClassName("modal");
//Get the items
var items = document.getElementsByClassName("modal-item");

var menuList = document.getElementById("all-menu");

menuList.onclick = function (event) {
  for (var i = 0; i < items.length; i++) {
    if (event.target == items[i]) {
      modals[i].style.display = "block";
    }
  }
};

window.onclick = function (event) {
  for (var i = 0; i < modals.length; i++)
    if (event.target == modals[i]) {
      modals[i].style.display = "none";
    }
};
