const app = require('./app')

// Load in the environment variables from .env file
require('dotenv').config()
const PORT = process.env.PORT


app.listen(PORT, () => {
    console.log(`Server is listening on port: ${PORT}`)
})