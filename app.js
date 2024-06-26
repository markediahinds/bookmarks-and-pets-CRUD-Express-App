const express = require('express')

// Imports the bookmark controller
const bookmarksController = require('./controllers/bookmarksController')
const petsController = require('./controllers/petsController')
const cors = require('cors')

// Configuration
// Create an instance of the express server 
const app = express()


// Middleware
// express.json() tells our app to accept incoming JSON from request (POST and PUT) 
app.use(express.json())

// to allow front end and back end to communicate
app.use(cors())



// Whenever the URL starts with: localhost:4001/bookmarks -- hand the request off the bookmarksController to route it appropriately 
app.use('/bookmarks', bookmarksController)
app.use('/pets', petsController)


// Home Route
app.get('/', (req, res) => {
    res.send(`Welcome to M.O.K.A Bookmarks App`)
})

// Export
module.exports = app