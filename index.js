const path = require('path'); 

const express = require('express');
const methodOverride = require('method-override'); 
const app = express(); 

const port = 3000; 

global.DEBUG = true; 

app.use(express.static('public'));

const locationsDal = require('./services/bk.locations'); 
const beerNumDal = require('./services/bk.beer');

app.set('view engine', 'ejs');


app.get('/', async (req, res) => {
    res.render('index.ejs', {name: 'Amy'}); 
}); 

const bkLocations = require('./routes/locations');
app.use('/locations', bkLocations); 

const bkBeer = require('./routes/beer');
app.use('/beer', bkBeer);


// Endpoint to fetch beer data
app.get('/api/beer', async (req, res) => {
    try {
        const beerNumbers = await beerNumDal.getBeerCount(); 
        console.log(beerNumbers); 
        res.json(beerNumbers);
    } catch (error) {
        console.error('Error fetching beer data:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});






app.listen(port, () => {
    console.log(`Running on port ${port}`); 
})