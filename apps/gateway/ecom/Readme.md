http://localhost:9001/graphql

query{
  getInventory(sku:"1959" ,location:"1"){
    id
    stock 
    product{
      id
      name
    }
  }
}