import ghorme from "./food/ghorme-sabzi.png";
import dolme from "./food/dolme.png";
import kabab from "./food/kabab.png";
import shishlik from "./food/shishlik.png";
import sosis from "./food/sosis.png";
import ash from "./food/ash.png";
import tahchin from "./food/tahchin.png";
import kalle from "./food/kalle.png";
import pizza from "./food/pizza.png";
import special from "./food/special.png";

export function loadMenu() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("main", "main-menu");

  const foods = [
    {
      name: "Ghorme Sabzi",
      img: ghorme,
      desc: "A rich herb stew with deep earthy flavors.",
      ing: "Parsley, cilantro, fenugreek, beef, dried lime",
    },
    {
      name: "Dolme",
      img: dolme,
      desc: "Stuffed grape leaves with herbs and rice.",
      ing: "Grape leaves, rice, herbs, meat",
    },
    {
      name: "Kabab",
      img: kabab,
      desc: "Juicy grilled ground meat skewers.",
      ing: "Beef, onion, saffron, tomato",
    },
    {
      name: "Shishlik",
      img: shishlik,
      desc: "Tender grilled lamb ribs.",
      ing: "Lamb, yogurt, saffron, garlic",
    },
    {
      name: "Sosis Bandari",
      img: sosis,
      desc: "Spicy sausage with onions and peppers.",
      ing: "Sausage, onion, chili, tomato paste",
    },
    {
      name: "Ash Reshte",
      img: ash,
      desc: "Hearty herb and noodle soup.",
      ing: "Beans, herbs, noodles, kashk",
    },
    {
      name: "Tahchin",
      img: tahchin,
      desc: "Crispy saffron rice cake with chicken.",
      ing: "Rice, yogurt, saffron, chicken",
    },
    {
      name: "Kalle Pache",
      img: kalle,
      desc: "Traditional slow-cooked sheep dish.",
      ing: "Sheep head, garlic, spices",
    },
    {
      name: "Pizza Irani",
      img: pizza,
      desc: "Persian-style loaded pizza.",
      ing: "Cheese, sausage, mushrooms, ketchup",
    },
    {
      name: "Soleimani Special",
      img: special,
      desc: "Crispy Persian kotlet.",
      ing: "Beef, potato, onion, spices",
    },
  ];

  foods.forEach((food) => {
    const card = document.createElement("div");
    card.classList.add("food-card");

    card.innerHTML = `
      <img src="${food.img}" class="food-img" alt="${food.name}" />
      <h2 class="food-name">${food.name}</h2>
      <p class="food-description">${food.desc}</p>
      <p class="food-ingredients">${food.ing}</p>
    `;

    container.appendChild(card);
  });

  content.appendChild(container);
}
