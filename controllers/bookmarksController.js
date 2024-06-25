const express = require('express')

// Create an instance of our express Router that our server can use to route appropriately
const bookmarks = express.Router()

// Import the bookmarks model
const bookmarksArray = require('../models/bookmark')

// Index Routes: gets all of the bookmark
// localhost:4001/bookmarks
bookmarks.get('/', (req, res) => {
    res.json(bookmarksArray)
})

// SHOW Route: gets ONE of the bookmarks
// bookmarks.get('/:arrayIndex', (req, res) => {
//     res.json(req.params)
// })

bookmarks.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(bookmarksArray[arrayIndex]){
        res.status(200).json(bookmarksArray[arrayIndex])
    } else {
        res.status(404).json({error: `Pet Not Found`})
    }
    res.json(bookmarksArray[arrayIndex])
})

// POST Route: creates a new bookmark and adds it to our array
bookmarks.post('/', (req, res) => {
    // req.params
    // req.query 
    // req is a big object that holds information about our request
    // Use req.body to get information from the request to create a new bookmark
    bookmarksArray.push(req.body)
    res.json(bookmarksArray[bookmarksArray.length - 1])
})

bookmarks.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    const deletedBookmark = bookmarksArray.splice(arrayIndex, 1)
    res.json(deletedBookmark[0])
})

module.exports = bookmarks