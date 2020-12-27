CREATE TABLE PRODUCTS(
  productsid    UUID    NOT NULL DEFAULT gen_random_uuid(),
  details       JSONB   NOT NULL,
  status 		TEXT    NOT NULL,
  lastupdateby  TEXT    NOT NULL,
  lastupdate    DATE    NOT NULL,
  PRIMARY KEY (productsid) 
);

CREATE TABLE CARTS(
  cartsid       UUID    NOT NULL DEFAULT gen_random_uuid(),
  details       JSONB   ,
  addresses     JSONB   ,
  payments      JSONB   ,
  usersid       UUID    NOT NULL, 
  status 		    TEXT    NOT NULL,
  lastupdateby  TEXT    NOT NULL,
  lastupdate    DATE    NOT NULL DEFAULT now(),
  PRIMARY KEY (cartsid) 
);
CREATE TABLE CARTITEMS(
  cartitemsid   UUID    NOT NULL DEFAULT gen_random_uuid(),
  cartsid       UUID    NOT NULL,
  details       JSONB   NOT NULL, 
  status 		    TEXT    NOT NULL,
  lastupdateby  TEXT    ,
  lastupdate    DATE    NOT NULL DEFAULT now(),
  PRIMARY KEY (cartitemsid) 
);