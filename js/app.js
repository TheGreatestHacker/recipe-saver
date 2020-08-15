const container = document.querySelector(".container")
//created an array of cards with names and images
const coffees = [
  { name: "Americano", image: "images/americano.jpg" },
  { name: "Expresso", image: "images/expresso.jpg" },
  { name: "Iced Coffee", image: "images/ice-coffee.jpg" },
  { name: "Macchiato", image: "images/macchiato.jpg" },
  { name: "Con Panna", image: "images/con-panna.jpg" },
  { name: "Flat White", image: "images/flat-white.jpg" },
  { name: "Cappuccino", image: "images/cappuccino.jpg" },
  { name: "Mocha", image: "images/mocha.jpg" },
  { name: "Latte", image: "images/latte.jpg" },
]

//Loop through the array and show them on the HTML file.
const showCoffees = () => {
    let output = ""
    coffees.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--avatar" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="#">Taste</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
//Wait until the DOM content finishes loading to run the showCoffees method
document.addEventListener("DOMContentLoaded", showCoffees)

//Register service worker. If statement checks if serviceWorker is supported by the current browser
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/serviceWorker.js')
      .then(res => console.log("service worker registered"))
      .catch(err => console.log("service worker not registered", err))
  });
}