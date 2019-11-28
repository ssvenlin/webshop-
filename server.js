const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => res.send('Hello World!'))

app.get('/getProducts', function (req, res) {
    let result = [
        {id: 1, make: "Mersu", model:"Bnez", price: 56.78, category: "car"},
        {id: 2, make: "Subaru", model:"Impreza", price: 6.78, category: "car"},
        {id: 3, make:"BMW", model:"1337", price: 99.78, category: "bil"},
        {id: 4, make:"Ford", model:"Focus", price: 102.2, category: "bil"},
        {id: 5, make:"Monster", model:"Truck", price: 199.78, category: "truck"},
        {id: 6, make:"Ram", model:"1500", price: 399.78, category: "truck"},
        {id: 7, make:"Yamaha", model:"20hp", price: 109.78, category: "båt"},
        {id: 7, make:"Yamaha", model:"mercury", price: 79.78, category: "båt"}
        ]
    res.send(result)
}) 

app.listen(port, () => console.log(`Example app listening on port ${port}!`))

