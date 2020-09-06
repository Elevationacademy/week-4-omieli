// const express = require('express')
// const app = express()
// const port = 3000
// const path = require('path')

// const users = {
//     tilda: "You've done a wonderful job",
//     riva: "You need to improve your form, but good perseverance",
//     jeremy: "You're incredible"
// }

// app.get('/users/:userID', function (request, response) {
//     response.send(users[request.params.userID])
// })

// app.get('/', function (request, response) {
//     console.log("Someone has come into the server. Brace yourselves.")
//     response.send("Ending the cycle, thanks for visiting")
// })


// app.listen(port, function(){
//     console.log(`Running server on port ${port}`)
// })

// app.get('/life', function (request, response) {
//     response.send("42")
// })

// app.get('/landing/:username', function (request, response) {
//     response.send(`Hi there, ${request.params.username}`)
// })

// app.get('/routeWithOptionalParameters', (request, response) => {
//     let params = request.query
//     response.send(params)
// })

// app.get('/details', (request, response) => {
//     let params = request.query
//     console.log(params.city)

//     response.send(params)
// })


const express = require('express')
const app = express()
const path = require('path')//package built-in to node


const data = {
    8112: {
        title: "Name of the Wind",
        author: "Patrick Rothfuss"
    },
    9121: {
        title: "The Catcher in the Rye",
        author: "J.D. Salinger"
    },
    1081: {
        title: "The Giver",
        author: "Lois Lowry"
    }
}


//serving FILES
app.use(express.static(path.join(__dirname, 'dist')))
app.use(express.static(path.join(__dirname, 'node_modules')))


//serving DATA
app.get('/books/:bookID', function(request, response){
    let bookID = request.params.bookID
    response.send(data[bookID])
})

const port = 3000
app.listen(port, function () {
    console.log(`Running server on port ${port}`)
})





