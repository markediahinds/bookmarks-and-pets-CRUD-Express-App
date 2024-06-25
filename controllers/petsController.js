const express = require('express')
const pets = express.Router()
const petsArray = require('../models/pet')

// localhost:4001/pets/
pets.get('/', (req, res) => {
    res.json(petsArray)
})

// SHOW Route for pets
pets.get('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    if(petsArray[arrayIndex]) {
        res.status(200).json(petsArray[arrayIndex])
    } else {
        res.status(404).json({error: `Pet Not Found`})
    }
})

pets.post('/', (req, res) => {
    petsArray.push(req.body)
    res.json(petsArray[petsArray.length - 1])
})

// DELETE a pet
// localhost:4001/pets/0
// finding each pet uniqely by their index in the array
pets.delete('/:arrayIndex', (req, res) => {
    const { arrayIndex } = req.params
    const adoptedPet = petsArray.splice(arrayIndex, 1) // slice: start at index of pet and only delete one
    res.json({message: `Successfully adopted a pet`})
})

// message and redirection 

module.exports = pets
// send array/objs - parse it into JSON