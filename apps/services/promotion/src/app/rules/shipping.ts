import {  Rule } from 'rools';
import { Promotion } from '@omni-app/dto';

export const freeShippingSkus = (orders) => { 
  return orders.items.filter(function(item) {
    return item.quantity >= orders.promotions.get('FREE_SHIPPING').quantity &&  
          orders.promotions.get('FREE_SHIPPING').skus.filter( sku =>  sku == item.sku).length > 0;  
    }).map(item => item.sku);
};

export const FREE_SHIPPING = new Rule({
  name: 'FREE_SHIPPING',
  priority: 5,
  when:[ (orders) => freeShippingSkus(orders).length > 0 ],
  then: (orders) => {  
    orders.items.forEach(function(item) { 
      if(freeShippingSkus(orders).includes(item.sku)){
          let discount = 0;
          // console.log('ITEM_PERCENTAGE_OFF:'+orders.promotions.get('ITEM_PERCENTAGE_OFF').percentage + " * "+ item.charge.skucharge +' = '+discount);
          
          let promotion         = new Promotion();
          promotion.discount    = discount;
          promotion.level       = 'Shipping';
          promotion.description = orders.promotions.get('FREE_SHIPPING').name  ;
          orders.appliedPromotions.push(promotion);
          
          item.charge.discount = discount;
        } 
    });