CREATE TABLE PRODUCTS(
  productsid    UUID    NOT NULL DEFAULT gen_random_uuid(),
  details       JSONB   NOT NULL,
  status 		TEXT    NOT NULL,
  lastupdateby  TEXT    NOT NULL,
  lastupdate    DATE    NOT NULL,
  PRIMARY KEY (productsid) 
);

CREATE TABLE CARTS(
  cartsid        UUID    NOT NULL DEFAULT gen_random_uuid(),
  details       JSONB   NOT NULL,
  usersid        UUID    NOT NULL, 
  status 		    TEXT    NOT NULL,
  lastupdateby  TEXT    NOT NULL,
  lastupdate    DATE    NOT NULL,
  PRIMARY KEY (cartsid) 
);