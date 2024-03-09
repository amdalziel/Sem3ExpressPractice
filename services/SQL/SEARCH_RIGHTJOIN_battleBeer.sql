SELECT "Beer".beer_id, "BattleBeer".num_votes, "Beer".beer_name
	FROM public."BattleBeer"
	RIGHT JOIN public."Beer" ON "Beer".beer_id="BattleBeer".beer_id
	ORDER BY beer_id ASC; 