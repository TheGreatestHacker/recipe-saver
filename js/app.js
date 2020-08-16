const container = document.querySelector(".container");
//created an array of cards with names and images
const coffees = [
  { name: "Americano", image: "images/americano.jpg", href: "/pages/americano.html" },
  { name: "Expresso", image: "images/expresso.jpg", href: "#" },
  { name: "Iced Coffee", image: "images/ice-coffee.jpg", href: "#" },
  { name: "Macchiato", image: "images/macchiato.jpg", href: "#" },
  { name: "Con Panna", image: "images/con-panna.jpg", href: "#" },
  { name: "Flat White", image: "images/flat-white.jpg", href: "#" },
  { name: "Cappuccino", image: "images/cappuccino.jpg", href: "#" },
  { name: "Mocha", image: "images/mocha.jpg", href: "#" },
  { name: "Latte", image: "images/latte.jpg", href: "#" },
];

//Loop through the array and show them on the HTML file.
const showCoffees = () => {
  let output = "";
  coffees.forEach(
    ({ name, image, href }) =>
      (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href=${href}>Recipe</a>
                </div>
                `)
  );
  container.innerHTML = output;
};

//Wait until the DOM content finishes loading to run the showCoffees method
document.addEventListener("DOMContentLoaded", showCoffees);

//Register service worker. If statement checks if serviceWorker is supported by the current browser
if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => {
    navigator.serviceWorker
      .register("/serviceWorker.js")
      .then((res) => console.log("service worker registered"))
      .catch((err) => console.log("service worker not registered", err));
  });
}
