CREATE TABLE products (
  productsid        UUID    NOT NULL DEFAULT gen_random_uuid(),
  name        TEXT    NOT NULL, 
  category    TEXT    NOT NULL,
  description TEXT    NOT NULL,
  price       NUMERIC NOT NULL,
  spec        JSONB   NOT NULL,
  PRIMARY KEY (productsid)
);

CREATE TABLE customers (
  customersid        UUID    NOT NULL DEFAULT gen_random_uuid(),
  name        TEXT    NOT NULL,  
  spec        JSONB   NOT NULL,
  PRIMARY KEY (customersid)
);


CREATE TABLE orders (
  ordersid      UUID    NOT NULL DEFAULT gen_random_uuid(), 
  usersid    	TEXT    NOT NULL,
  status        TEXT    NOT NULL, 
  details     	JSONB   NOT NULL,
  PRIMARY KEY (ordersid)
);

