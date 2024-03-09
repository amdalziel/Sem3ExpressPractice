const dal = require('./bkbrewery_db'); 

var getBeer = function() {
    if(DEBUG) console.log('bk.beer - getBeer'); 
    return new Promise(function(resolve, reject) {
        const sql = `SELECT * FROM public."Beer" \
        ORDER BY beer_type ASC `
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
    getBeer, 
} 