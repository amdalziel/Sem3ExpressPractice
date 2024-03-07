const dal = require('./bkbrewery_db'); 

var getLocations = function() {
    if(DEBUG) console.log('bk.locations - getLocations'); 
    return new Promise(function(resolve, reject) {
        const sql = `SELECT * from public."Customers";`
        dal.query(sql, [], (err, result) => {
            if(err) {
                if(DEBUG) console.log(err); 
                reject(err); 
            } else {
                resolve(result.rows); 
            };

        });
    });
}; 

module.exports = {
    getLocations, 
} 