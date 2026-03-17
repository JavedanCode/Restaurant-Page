export function loadAbout() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("main", "main-about");

  container.innerHTML = `
    <p>About Us</p>
    <p>
      We’re all about good food, bold flavors, and Iranian hospitality.
    </p>
    <p>
      Whether you're here for nostalgia or trying Persian food for the first time, we’ve got you.
    </p>
    <p>Contact us: 123 456 78 90</p>
  `;

  content.appendChild(container);
}
