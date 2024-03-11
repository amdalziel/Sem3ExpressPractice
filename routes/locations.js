const express = require('express');
const router = express.Router(); 

const locationsDal = require('../services/bk.locations'); 


router.get('/', async (req, res) => {
    if(DEBUG) console.log('Route: /locations'); 
    
    try {
        const getLocations = await locationsDal.getLocations(); 
        if(DEBUG) console.table(getLocations); 
        res.render('locations', { location: getLocations }); 
        
    } catch (error) {
        res.status(503); 
        res.send('Error' + error); 
        
    }
}); 

module.exports = router; 