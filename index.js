const path = require('path'); 

const express = require('express');
const methodOverride = require('method-override'); 
const app = express(); 
const port = 3000; 

global.DEBUG = true; 

const locationsDal = require('./services/bk.locations'); 

app.use(express.static('public'));

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    res.render('index.ejs', {name: 'Amy'}); 
}); 

const bkLocations = require('./routes/locations');
app.use('/locations', bkLocations); 

const bkBeer = require('./routes/beer');
app.use('/beer', bkBeer); 






app.listen(port, () => {
    console.log(`Running on port ${port}`); 
})