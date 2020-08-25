
http://localhost:5001/graphql

query{
  getCart(userId:"CART123"){
    cartid
    items{
      sku
      quantity
  	}
  }
}

mutation{
  addItem(
    item:{
      userId :"CART123"
    	sku: "SKU1235" ,
    	quantity :12,
      attributes:[{
        key : "color",
        value :"blue"
      },{
        key : "size",
        value :"XL"
        
      }]
      fulfillment:{
        code:"STH"
      }
      
  }
    
  ){
    cartid 
    items{
      sku
      quantity
    }
  }
}   