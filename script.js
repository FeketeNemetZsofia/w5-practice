console.log("hello")
document.write("Hello World!")
const h1Element = document.querySelector('h1')
h1Element.innerHTML = "Renamed"
console.log('loaded')

const rootElement = document.querySelector("#root")
console.log(rootElement)

async function init() { // felkészítjük a js-t h a függvényben lesznek a sync kódok
    const res = await fetch("https://restcountries.com/v3.1/all") //megvárjuk a fetch válaszát (a promise helyett)
    const data = await res.json() //megvárjuk h a response megjöjjön promise helyett. Innentől elérhető az adat a változóból
    console.log(data)
}

init()
