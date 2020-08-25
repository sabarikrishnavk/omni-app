
http://localhost:5002/api/v1/promotion

POST

{
	"store": "1",  
    "items": [ 
        {
            "sku": "SKU1",
            "quantity":3,
            "shipMode" :{"code": "STH1" } 
        }, 
        {
            "sku": "SKU2",
            "quantity": 2,
            "shipMode" :{"code": "STH1" } 
        },
        {
            "sku": "SKU3",
            "quantity": 1 ,
            "shipMode" :{"code": "LTL1" } 
        }
    ]
 }