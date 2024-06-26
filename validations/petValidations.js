const checkForNameKey = (req, res, next) => {
    if(req.body.hasOwnProperty('name')) {
        next()
    } else {
        res.json({ error: `Pet must have a name`})
    }
}

module.exports = { checkForNameKey } 
// you can check/validate for anything we want, ie. Does my string contain uppercase?