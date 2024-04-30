const open = document.getElementById("openMenu");
const close = document.getElementById("closeMenu");
const menu = document.getElementById("menu");
const banner_next = document.getElementById("banner-next");
const banner_prev = document.getElementById("banner-prev");

open.addEventListener("click", function () {
  menu.style.display = "flex";
  menu.style.right = menu.offsetWidth * -1 + "px";

  setTimeout(function () {
    menu.style.opacity = "1";
    menu.style.right = "0";
    openMenu.style.display = "none";
  }, 10);
});

close.addEventListener("click", function () {
  menu.style.opacity = "0";
  menu.style.right = menu.offsetWidth * -1 + "px";

  setTimeout(function () {
    menu.removeAttribute("style");
    openMenu.removeAttribute("style");
  }, 200);
});

banner_next.addEventListener("click", function () {
  let banner_active = document.getElementById("active");
  let item = document.getElementById("item");
  banner_active.setAttribute("id", "flex");
  item.setAttribute("id", "active");
  banner_active.setAttribute("id", "item");
});

banner_prev.addEventListener("click", function () {
  let banner_active = document.getElementById("active");
  let item = document.getElementById("item");
  banner_active.setAttribute("id", "flex");
  item.setAttribute("id", "active");
  banner_active.setAttribute("id", "item");
});
