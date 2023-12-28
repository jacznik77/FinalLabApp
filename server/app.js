// Imports
const express = require('express')
//const expressLayouts = require('express-ejs-layouts')
const path = require('path');
const noticiasRoute = require('./routes/noticias_route');

const app = express()
const port = 5000

app.use(express.json());

// Static Files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
//app.use('/images', express.static(__dirname + 'public/images'))

//API
app.use('/api/noticias', noticiasRoute);

app.get('', (req, res) => {

    res.sendFile(path.join(__dirname + '/views/index.html'))
})
// Listen on Port 5000
app.listen(port, () => console.info(`App listening on port ${port}`))