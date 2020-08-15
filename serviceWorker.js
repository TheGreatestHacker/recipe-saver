const staticDevCoffee = "dev-coffee-site-v1"
const assets = [
  "/",
  "/index.html",
  "/css/style.css",
  "/js/app.js",
  "/images/americano.jpg",
  "/images/cappuccino.jpg",
  "/images/con-panna.jpg",
  "/images/expresso.jpg",
  "/images/flat-white.jpg",
  "/images/ice-coffee.jpg",
  "/images/latte.jpg",
  "/images/macchiato.jpg",
  "/images/mocha.jpg",
]

//Declared name of our cache as staticDevCoffee and the assets to store in the cache. 
//"self" is the service worker itself (enables us to listen to life cycle events and do something in return)
//The service worker has several life cycles, and one of them is the install event. It runs when a service worker is installed.
//It's triggered as soon as the worker executes, and it's only called once per service worker.
//when the install event is fired, we run the callback which gives us access to the event object
self.addEventListener("install", installEvent => {
  //Caching on the browser can take some time to finish since its asynchronous. To handle this we use waitUntil() which wiats for the action to finish.
  installEvent.waitUntil(
    //Once the cache API is ready, we can run the open() method and create our cache by pasing its name as an argument to caches.open(staticDevCoffee)
    caches.open(staticDevCoffee).then(cache => {
      //return a promise, which helps us store our assets in the cache with cache.addAll(assets)
      cache.addAll(assets)
    })
  )
})
