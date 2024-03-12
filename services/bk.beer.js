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

var getBeerCount = function() {
    if(DEBUG) console.log('bk.beer - getBeerCount'); 
    return new Promise(function(resolve, reject) {
        const sql = ` SELECT "Beer".beer_id, "BattleBeer".num_votes, "Beer".beer_name \ 
        FROM public."BattleBeer" \
        RIGHT JOIN public."Beer" ON "Beer".beer_id="BattleBeer".beer_id \
        WHERE "Beer".beer_id = 1 OR "Beer".beer_id = 3 \
        OR "Beer".beer_id = 5 OR "Beer".beer_id = 6 \
        OR "Beer".beer_id = 8 \
		ORDER BY num_votes ASC`
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
    getBeerCount, 
} 