const express = require('express');
const router = express.Router(); 

const beerDal = require('../services/bk.beer'); 

router.get('/', async (req, res) => {
    if(DEBUG) console.log('Route: /beer'); 

    try {
        const getBeer = await beerDal.getBeer(); 
        if(DEBUG) console.table(getBeer); 
        res.render('beer', { beer: getBeer }); 
        
    } catch (error) {
        res.status(503); 
        res.send('Error' + error); 
        
    }

});

module.exports = router; 

