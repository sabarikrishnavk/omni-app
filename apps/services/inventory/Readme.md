http://localhost:4002/graphql

query{
  getInventory(sku:"1958" ,location:"1"){
    id
    stock 
    product{
      id
      name
    }
  }
}