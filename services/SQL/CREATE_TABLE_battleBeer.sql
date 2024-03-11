CREATE TABLE public."BattleBeer"
(
    beer_id integer NOT NULL,
    num_votes integer NOT NULL DEFAULT 0,
    CONSTRAINT "battleBeer_beerFK" FOREIGN KEY (beer_id)
        REFERENCES public."Beer" (beer_id) MATCH SIMPLE
        ON UPDATE NO ACTION
        ON DELETE NO ACTION
        NOT VALID
);

ALTER TABLE IF EXISTS public."BattleBeer"
    OWNER to postgres;