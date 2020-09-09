const express = require('express')
const path = require('path')

const app = express()
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))

const bodyParser = require('body-parser')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

const wonders = [
    { name: "Mount Everest", location: "Nepal", visited: false },
    { name: "Grand Canyon", location: "Arizona", visited: false },
    { name: "Botanical Gardens", location: "Singapore", visited: true },
    { name: "Pantheon", location: "Greece", visited: false },
    { name: "Colosseum", location: "Italy", visited: true }
]

app.get('/wonders', function (req, res) {
    app.post('/wonder', function (req, res) {
        console.log("Someone's trying to make a post request")
        console.log(req.body)
        let wonder = req.body
        wonder.visited = false
        wonders.push(wonder)
        res.send("completed adding wonder")
    })
    
    res.send(wonders)
})

const port = 1337 //because why not
app.listen(port, function () {
    console.log(`Server running on ${port}`)
})