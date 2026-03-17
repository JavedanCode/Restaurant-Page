import "./styles.css";
import { loadHome } from "./home.js";
import { loadMenu } from "./menu.js";
import { loadAbout } from "./about.js";
import icon from "./img/icon.png";

const link = document.createElement("link");
link.rel = "icon";
link.type = "image/png";
link.href = icon;

document.head.appendChild(link);

const links = document.querySelectorAll(".nav-link");

loadHome();

links.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();

    const page = link.dataset.page;

    if (page === "home") loadHome();
    if (page === "menu") loadMenu();
    if (page === "about") loadAbout();

    links.forEach((l) => l.classList.remove("active"));
    link.classList.add("active");
  });
});
