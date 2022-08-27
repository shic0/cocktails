const fetchList = async () => {
    const svar = await fetch("/cocktails", {
        method : "GET"
    })
    const cocktails = await svar.json()
    const listan = document.getElementById("listan") //skapar lista
    listan.innerHTML = cocktails
        .map(drink => "<li>" + drink + "</li>") //loop 
        .join("")
}

const addCocktail = async () => {
    const input = document.getElementById("addCocktail")
    console.log("skapa ny", input.value)

    const data = {name: input.value}
    const svar = await fetch("/cocktails", {
        method : "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(data)
    })
    input.value = ""
    // uppdaterar listan med nya drinken
    await fetchList()
}
const sparaBtn = document.getElementById("saveBtn")
sparaBtn.addEventListener("click", addCocktail)

async function fetchExternalApi () {
    const res = await fetch('/cocktail/random')
    const data = await res.json()
    console.log('Min random cocktail', data.drinks[0])
    const input = document.getElementById("addCocktail")
    const drink = data.drinks[0]
    input.value = drink.strDrink
}

const externBtn = document.getElementById("getExternalApi")
externBtn.addEventListener("click", fetchExternalApi) 

fetchList() // Hämtar listan när sidan laddas