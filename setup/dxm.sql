designer.widgets
designer.pages 
designer.components
designer.contents 
designer.sites 

designer.sitepages
designer.sitecontents
designer.sitepagecontents




-- page templates
-- type is page/widget : 
-- filename : for widget filename is file in assets/views/partials folder .
-- hbsreference variable used in index.hbs file or partials files.
-- drop table widgettemplates;
CREATE TABLE widgettemplates (
	widgettemplatesid 	UUID    NOT NULL DEFAULT gen_random_uuid(),
	templatename        TEXT    NOT NULL,  
  	filename	        TEXT    NOT NULL, 
    hbsreference	    TEXT    NOT NULL,
    specs             JSONB   ,  
  	PRIMARY KEY (widgettemplatesid)
);

INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Header 1','header1','header1','{"contents": ["header-banner"] , "components":["menu"] }');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Footer 1','footer1','footer1','""');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Body 0','body0','body0','{"components": ["row1column0"]}');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Body 1','body1','body1','{"components": ["row1column0","row2column1","row2column2"]}');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Body 2','body2','body2','{"components": ["row1column0","row2column1","row2column2","row3column0"]}');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Body 3','body3','body3','{"components": ["row1column0","row2column0","row3column0"]}');
INSERT INTO widgettemplates (widgettemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'CheckoutHeader','checkoutheader','checkoutheader','""');



-- drop table pagetemplates;
CREATE TABLE pagetemplates (
	pagetemplatesid UUID    NOT NULL DEFAULT gen_random_uuid(),
	templatename    TEXT    NOT NULL,  
  	filename	    TEXT    NOT NULL, 
    hbsreference	JSONB   ,  
    specs           JSONB   ,  
  	PRIMARY KEY (pagetemplatesid)
);
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Static Page','staticpage','{"widgets": ["header","body","footer"]}','""');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Home Page','homepage','{"widgets": ["header","body","footer"]}','""');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Aisle Page','aislepage','{"widgets": ["header","body","footer"]}','""');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'PLP Page','plppage','{"widgets": ["header","body","footer"]}','""');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'PDP Page','pdppage','{"widgets": ["header", "body", "footer"]}','{"schema": "query ProductPageQuery { products(where: {sku: {_eq: #keyId }}) { details productsid sku } }"}');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Cart Page','cartpage','{"widgets": ["header","body","footer"]}','{"schema": "query CartPageQuery { carts(where: {cartsid: {_eq: #keyId }}) { details items{ details status } cartsid usersid } }"}');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Checkout Page','checkoutpage','{"widgets": ["header","body","footer"]}','{"schema": "query CartPageQuery { carts(where: {cartsid: {_eq: #keyId }}) { details addresses payments items{ details status } cartsid usersid } }"}');
INSERT INTO pagetemplates (pagetemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Order Page','orderpage','{"widgets": ["header","body","footer"]}','""');

-- (html tags /images banner /text banner /form)
-- drop table contenttemplates; 
CREATE TABLE contenttemplates (
	contenttemplatesid 	UUID    NOT NULL DEFAULT gen_random_uuid(),
	templatename        TEXT    NOT NULL,  
  	filename	        TEXT    NOT NULL, 
    hbsreference	    TEXT    NOT NULL,
    specs               JSONB   ,  
  	PRIMARY KEY (contenttemplatesid)
);
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Meta Data','meta','meta','""'); 
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Image ','image','image','""'); 
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Header Banner','header-banner','header-banner','""'); 
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Body Banner','body-banner','body-banner','""'); 
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Text Banner ','text-banner','text-banner','""');
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Form Data','form-data','form-data','""');
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'Modal ','modal','modal','""');
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'JSON ','json','json','""');
INSERT INTO contenttemplates (contenttemplatesid,templatename,filename,hbsreference,specs) VALUES 
(gen_random_uuid(),'javascript ','javascript','javascript','""');

-- drop table componenttemplates;
CREATE TABLE componenttemplates (
	componenttemplatesid 	UUID    NOT NULL DEFAULT gen_random_uuid(),
	templatename            TEXT    NOT NULL,  
  	filename	            TEXT    NOT NULL,  
    hbsreference	        TEXT    NOT NULL,
    restrictions            JSONB   ,  
  	PRIMARY KEY (componenttemplatesid)
);


INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'menu-vertical','menu-vertical','menu-vertical','{"allowedpages": ["static", "pdp", "plp", "cart", "myaccount"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'menu-horizontal','menu-horizontal','menu-horizontal','{"allowedpages": ["static", "pdp", "plp", "cart", "myaccount"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'sayt','sayt','sayt','{"allowedpages": ["static", "pdp", "plp", "cart", "myaccount"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'product-card','product-card','product-card','{"allowedpages": ["static", "pdp", "plp", "cart","checkout", "myaccount"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'add-to-cart','add-to-cart','add-to-cart','{"allowedpages": [ "pdp", "plp"]}'); 

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'cart errors','cart-errors','cart-errors','{"allowedpages": ["cart", "checkout"]}'); 
INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'cart item','cart-items','cart-items','{"allowedpages": ["cart", "checkout"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'cart summary','cart-summary','cart-summary','{"allowedpages": ["cart", "checkout"]}'); 
INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'e wallet','e-wallet','e-wallet','{"allowedpages": ["cart", "checkout","profile"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'address details','address-details','address-details','{"allowedpages": ["orderpage", "checkout"]}');
INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'address list','address-list','address-list','{"allowedpages": ["checkout","profile"]}');

INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'payment form','payment-form','payment-form','{"allowedpages": ["checkout","profile"]}');
INSERT INTO componenttemplates (componenttemplatesid,templatename,filename,hbsreference,restrictions) VALUES 
(gen_random_uuid(),'payment list','payment-list','payment-list','{"allowedpages": ["checkout","profile"]}');

-- Site definition : website /kiosk/ internal website (domains for dev/stage/prod) : 
-- Additional spec for security/admin related json
-- Additional details for language/country 
-- drop table sites;

CREATE TABLE sites (
  sitesid       UUID    NOT NULL DEFAULT gen_random_uuid(),
  sitename      TEXT    NOT NULL, 
  description 	TEXT    NOT NULL,
  status 		TEXT    NOT NULL,
  startdate     DATE    NOT NULL,
  enddate     	DATE    NOT NULL,
  details       JSONB   NOT NULL, 
  domains       JSONB   NOT NULL,  
  PRIMARY KEY (sitesid)
);

INSERT INTO sites (sitesid,sitename,description,status,startdate,enddate,details,domains) VALUES 
(gen_random_uuid(),'Galaxy','galaxy website','Active','2020-12-11','2099-12-31',
'{"siteadmin": ["sabari"], "forwardhost": "localhost","domain": "ecommerce"}',
'{"dev": "dev.galaxy.com", "prod": "www.galaxy.com", "stage": "stage.galaxy.com"}');


-- drop table sitecontents;  
CREATE TABLE sitecontents (
  sitecontentsid        UUID    NOT NULL DEFAULT gen_random_uuid(),
  contentname           TEXT    NOT NULL, 
  sitesid               UUID    NOT NULL,
  contenttemplatesid    UUID    NOT NULL,  
  status 		        TEXT    NOT NULL,
  startdate             DATE    NOT NULL,
  enddate     	        DATE    NOT NULL,  
  contents              JSONB   NOT NULL, 
  pagecontentname       text,
  PRIMARY KEY (sitecontentsid)
);
INSERT INTO sitecontents (sitecontentsid,contentname,sitesid,contenttemplatesid,status,startdate,enddate,pagecontentname,contents) VALUES 
(gen_random_uuid(),'Header Banner',(select sitesid from sites where sitename ='Galaxy'),
(select contenttemplatesid from contenttemplates c  where hbsreference ='header-banner'),
'Active','2020-12-11','2099-12-31',
'header-banner',
'{"text":   "Welcome to Galaxy.com","image":"/img/logo.png"}');

INSERT INTO sitecontents (sitecontentsid,contentname,sitesid,contenttemplatesid,status,startdate,enddate,pagecontentname,contents) VALUES 
(gen_random_uuid(),'HomePage Banner 1' ,(select sitesid from sites where sitename ='Galaxy'),
(select contenttemplatesid from contenttemplates c  where hbsreference ='text-banner'),
'Active','2020-12-11','2099-12-31',
'home-page-row1',
'{"text":   "HomePage Banner 1"}');

INSERT INTO sitecontents (sitecontentsid,contentname,sitesid,contenttemplatesid,status,startdate,enddate,pagecontentname,contents) VALUES 
(gen_random_uuid(),'HomePage Banner 2' ,(select sitesid from sites where sitename ='Galaxy'),
(select contenttemplatesid from contenttemplates c  where hbsreference ='text-banner'),
'Active','2020-12-11','2099-12-31',
'home-page-row2',
'{"text":   "HomePage Banner 2"}');

INSERT INTO sitecontents (sitecontentsid,contentname,sitesid,contenttemplatesid,status,startdate,enddate,pagecontentname,contents) VALUES 
(gen_random_uuid(),'HomePage Banner 3' ,(select sitesid from sites where sitename ='Galaxy'),
(select contenttemplatesid from contenttemplates c  where hbsreference ='text-banner'),
'Active','2020-12-11','2099-12-31',
'home-page-row3',
'{"text":   "HomePage Banner 3"}');

-- drop table sitepages;
CREATE TABLE sitepages  (
  sitepagesid       UUID    NOT NULL DEFAULT gen_random_uuid(),
  sitesid           UUID    NOT NULL,
  pagetemplatesid   UUID    NOT NULL,
  pagename          TEXT    NOT NULL, 
  pageurl 	        TEXT    NOT NULL,
  version           INTEGER ,
  status 		    TEXT    NOT NULL,
  startdate         DATE    NOT NULL,
  enddate     	    DATE    NOT NULL,
  widgets           JSONB   NOT NULL, 
  components        JSONB   NOT NULL,
  metadata          JSONB   NOT NULL,
  PRIMARY KEY (sitepagesid)
);

INSERT INTO sitepages (sitepagesid,sitesid,pagetemplatesid,pagename,pageurl,"version",status,startdate,enddate, widgets,components,metadata) VALUES 
(gen_random_uuid(), (select sitesid from sites where sitename ='Galaxy'), (select pagetemplatesid from pagetemplates where filename='homepage'),
'Galaxy Home Page','shop',1,'Active','2020-12-01','2021-12-31',
'{"header": "header1","footer":"footer1","body":"body3"}',
'{"menu": "menu-horizontal", row1column0": {"content":"home-page-row1"} , "row2column0":{"content":"home-page-row2"}  , "row3column0": {"content":"home-page-row3"} }', 
'{"description": "Home Page", "title":"Welcome to Galaxy.com" }' ) ;


INSERT INTO sitepages (sitepagesid,sitesid,pagetemplatesid,pagename,pageurl,"version",status,startdate,enddate, widgets,components,metadata) VALUES 
(gen_random_uuid(), (select sitesid from sites where sitename ='Galaxy'), (select pagetemplatesid from pagetemplates where filename='pdppage'),
'Galaxy PDP Page','products/keyId',1,'Active','2020-12-01','2021-12-31',
'{"header": "header1","footer":"footer1","body":"body2"}',
'{"menu": "menu-horizontal","row1column0": {"content":"pdp-banner"},"row2column1": {"component":"product-details", "sub-components":[{"col1row0":"product-image","col2row1":"product-info","col2row2":"add-to-cart"}] } ,"row2column2": {"component":"cart-summary"}, "row3column0": {"component":"related-products"} }', 
'{"description": "PDP Page", "title":"Welcome to Galaxy.com"}' ) ;

INSERT INTO sitepages (sitepagesid,sitesid,pagetemplatesid,pagename,pageurl,"version",status,startdate,enddate, widgets,components,metadata) VALUES 
(gen_random_uuid(), (select sitesid from sites where sitename ='Galaxy'), (select pagetemplatesid from pagetemplates where filename='cartpage'),
'Galaxy Cart Page','cart',1,'Active','2020-12-01','2021-12-31',
'{"header": "header1","footer":"footer1","body":"body2"}',
'{"menu": "menu-horizontal","row1column0": {"content":"cart-banner"},"row2column1": {"component":"cart-items"} ,"row2column2": {"component":"cart-summary"}, "row3column0": {"component":"related-products"} }', 
'{"description": "Cart Page", "title":"Welcome to Galaxy.com" }' ) ;
 
 INSERT INTO sitepages (sitepagesid,sitesid,pagetemplatesid,pagename,pageurl,"version",status,startdate,enddate, widgets,components,metadata) VALUES 
(gen_random_uuid(), (select sitesid from sites where sitename ='Galaxy'), (select pagetemplatesid from pagetemplates where filename='staticpage'),
'Galaxy Page not found','404',1,'Active','2020-12-01','2021-12-31',
'{"header": "header1","footer":"footer1","body":"body0"}',
'{"menu": "menu-horizontal","row1column0": {"content":"page-not-found-message"} }', 
'{"description": "Galaxy Page not found Page", "title":"Welcome to Galaxy.com" }' ) ;

 INSERT INTO sitepages (sitepagesid,sitesid,pagetemplatesid,pagename,pageurl,"version",status,startdate,enddate, widgets,components,metadata) VALUES 
(gen_random_uuid(), (select sitesid from sites where sitename ='Galaxy'), (select pagetemplatesid from pagetemplates where filename='checkoutpage'),
'Galaxy Checkout Page','checkout',1,'Active','2020-12-01','2021-12-31',
'{"header": "header2","footer":"footer1","body":"body2"}',
'{"menu": "menu-horizontal","row1column0": {"content":"checkout-banner"},"row2column1": {"component":"checkout-address"} ,"row2column2": {"component":"cart-summary"}, "row3column0": {"component":"checkout-payment"} }', 
'{"description": "Galaxy Checkout Page", "title":"Welcome to Galaxy.com" }' ) ;

--drop table sitepagecontents;
CREATE TABLE sitepagecontents (
  sitepagecontentsid        UUID    NOT NULL DEFAULT gen_random_uuid(),
  sitepagesid               UUID ,
  sitecontents              UUID , 
  PRIMARY KEY (sitepagecontentsid)
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Home Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='header-banner')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy PDP Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='header-banner')
);

INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Cart Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='header-banner')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Home Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='home-page-row1')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Home Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='home-page-row2')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Home Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='home-page-row3')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Page not found') ,  
(select sitecontentsid from sitecontents s where pagecontentname='header-banner')
);
INSERT INTO sitepagecontents(sitepagecontentsid, sitepagesid,sitecontents) VALUES
(gen_random_uuid() ,
(select sitepagesid from sitepages s where pagename ='Galaxy Checkout Page') ,  
(select sitecontentsid from sitecontents s where pagecontentname='header-banner')
);




