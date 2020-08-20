
import {CartResponse , ShipModeGroup} from '@omni-app/dto';  

import { Injectable } from '@nestjs/common'; 


@Injectable()
export class ShippingService {

 
    async getShippingCharge(cart: CartResponse): Promise<CartResponse> {

        //Pass the skus, quantity and store and the address to an API which would return the following details.
        let skuShipCharges = new Array<ShipModeGroup>(); 
        skuShipCharges = [
            { 
                skus: ["SKU1","SKU2" ] , 
                store : "1" ,
                selectedCode:{ shipCharge : 5.99,  code: "STH1", description: "Ship to Home1"  }  ,
                modes:[
                    { shipCharge :5.99,  code: "STH1", description: "Ship to Home1"  },
                    { shipCharge :10.99, code: "STH2", description: "2 Days"  },
                    { shipCharge :14.99, code: "STH3", description: "Next Day"  }
                ]

            }
             ,
            { 
                skus: ["SKU3","SKU4" ], 
                store : "1"  ,
                selectedCode:{ shipCharge : 100.99,  code: "LTL1", description: "Truck load "  } ,
                modes:[
                    { shipCharge :100.99,  code: "LTL1", description: "Truck load 1"  },
                    { shipCharge :150.99, code: "LTL2", description: "Truck load 2"  }, 
                ] 
            } 
        ]; 

        cart.items.map(item => {
            let shipMode = 
                skuShipCharges.filter( 
                    skuShipCharge => {
                        return skuShipCharge.skus.filter( sku => {
                            return sku == item.sku 
                        }).length > 0 ;  
                    });
            item.shipMode = shipMode[0].selectedCode; 
        });
        skuShipCharges.map(shipMode =>{
            // console.log('cart.charge.shipping : '+cart.charge.shipping);
            // console.log('shipMode.selectedCode.charge : '+ shipMode.selectedCode.charge.toFixed(2));
            cart.charge.shipping = cart.charge.shipping  + shipMode.selectedCode.shipCharge ;
            // console.log('cart.charge.shipping : '+ Number(cart.charge.shipping.toFixed(2)));
        });
        
        // console.log('------------------------');
        // console.log('shipping charge : ' +cart);
        // console.log('------------------------');
        return cart;
    } 

}   


