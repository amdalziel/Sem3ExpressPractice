const path = require('path'); 

const express = require('express');
const methodOverride = require('method-override'); 
const app = express(); 
const port = 3000; 

global.DEBUG = true; 

const locationsDal = require('./services/bk.locations'); 


app.set('view engine', 'ejs');




app.get('/', async (req, res) => {
    if(DEBUG) console.log('Route: /'); 
    
    try {
        const getLocations = await locationsDal.getLocations(); 
        if(DEBUG) console.table(getLocations); 
        res.render('locations', { location: getLocations }); 
        
    } catch (error) {
        res.status(503); 
        res.send('Error' + error); 
        
    }
}); 




app.listen(port, () => {
    console.log(`Running on port ${port}`); 
})