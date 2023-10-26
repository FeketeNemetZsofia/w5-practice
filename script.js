console.log('loaded')

const rootElement = document.querySelector("#root")
console.dir(rootElement)


const fetchUrl = async (url) => {
    const response = await fetch(url)
    const data = await response.json()
    return data
}


const countryComponent = (country) => `
    <div class="country">
        <h2>country name: ${country.name.common}</h2>
        <h3>country pop: ${country.population}</h3>
    </div>
`

/*async function init() { // felkészítjük a js-t, hogy a függvényben lesznek aszinkron kódok
    const response = await fetch("https://restcountries.com/v3.1/all") // megvárjuk a fetch válaszát (promise helyett)
    const data = await response.json() // megvárjuk, hogy a response megjöjjön (promise helyett) -> itt lesz elérhető az adatunk

    data.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
}

init()*/

const init = async() => {
    const finalData = await fetchUrl("https://restcountries.com/v3.1/all")
    console.log(finalData)
    finalData.forEach(country => rootElement.insertAdjacentHTML("beforeend", countryComponent(country)))
}

init()