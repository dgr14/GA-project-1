const express = require('express')
const path = require('path')
const app = express()

// Middleware
app.use('/static', express.static(path.resolve( __dirname, 'frontend', )))

app.get('/*', (req, res,) => {
    res.sendFile(path.resolve('frontend', 'index.html'))
})

app.listen(process.env.PORT || 5060, () => console.log('Server running...'))