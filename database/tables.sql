-- Table: public.cards

-- DROP TABLE IF EXISTS public.cards;

CREATE TABLE IF NOT EXISTS public.cards
(
    card_img character varying(255) COLLATE pg_catalog."default",
    game character varying(50) COLLATE pg_catalog."default" NOT NULL,
    set character varying(5) COLLATE pg_catalog."default" NOT NULL,
    cn integer NOT NULL,
    treatment character varying(255) COLLATE pg_catalog."default" NOT NULL,
    foil boolean DEFAULT false,
    inv_count integer NOT NULL DEFAULT 0,
    rec_added date DEFAULT CURRENT_DATE,
    card_id bigint NOT NULL GENERATED ALWAYS AS IDENTITY ( INCREMENT 1 START 1 MINVALUE 1 MAXVALUE 9223372036854775807 CACHE 1 ),
    card_name character varying(255) COLLATE pg_catalog."default" NOT NULL,
    CONSTRAINT cards_pkey PRIMARY KEY (card_id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.cards
    OWNER to postgres;

