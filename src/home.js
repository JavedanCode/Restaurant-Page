export function loadHome() {
  const content = document.getElementById("content");
  content.innerHTML = "";

  const container = document.createElement("div");
  container.classList.add("main", "main-home");

  container.innerHTML = `
    <p>The ultimate Iranian food experience</p>
    <p>Iranian hospitality since 2002</p>
    <p>History:</p>
    <p>
      Founded in 2002, our restaurant began as a small family kitchen built on recipes passed down through generations.
    </p>
    <p>
      Inspired by the rich flavors of Persian cuisine, we take pride in every dish.
    </p>
    <p>Order online or pay us a visit!</p>
  `;

  content.appendChild(container);
}
