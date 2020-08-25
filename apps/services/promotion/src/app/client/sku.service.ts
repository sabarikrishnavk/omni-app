import {CartPromotion, SkuPrice } from '@omni-app/dto';  

import { Injectable } from '@nestjs/common'; 

@Injectable()
export class SkuService {
 

    //Find the SKU prices from product elastic index.
    async getSKUPrice(cart: CartPromotion ): Promise<CartPromotion>{
        let skus = cart.items.map(item => item.sku);
        //find Price by skus and cart.store
        let skuPrices  = new Array<SkuPrice>();
        skuPrices = [
            { sku: "SKU1" ,unitprice : 75 , store : "1" },
            { sku: "SKU2" ,unitprice : 25 , store : "1" },
            { sku: "SKU3" ,unitprice : 500 , store : "1" },
            { sku: "SKU4" ,unitprice : 10 , store : "1" }
        ];

        cart.items.map(item => {
            item.unitprice = skuPrices.filter( skuPrice =>  skuPrice.sku == item.sku)[0].unitprice; 
        });
        console.log('Find product price' + cart.items)
        return cart;
    } 
}   


