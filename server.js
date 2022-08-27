import express from 'express'
import bodyParser from 'body-parser'
import fetch from 'node-fetch'
const app = express()

// localk db
const cocktails = []
//servar frontend
app.use(
  express.static("client")
)
//läser json från frontend och konvertarar till object
app.use(bodyParser.json())

//endpoint för att hämta alla cocktails
app.get("/cocktails", (req, res) => {
    res.send(cocktails)
})

//endpoint för att lägga till drink
app.post("/cocktails", (req, res) => {
    cocktails.push(req.body.name)
    res.end()
})

app.get("/cocktail/random", async (req, res) => {
  const resTwo = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
  const data = await resTwo.json()
  res.send(data)
})
app.listen(3000)