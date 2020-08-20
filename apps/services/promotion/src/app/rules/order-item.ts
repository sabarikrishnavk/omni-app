import {  Rule } from 'rools';
import { Promotion } from '@omni-app/dto';
  
export const skusInItemPercentageOff = (orders) => { 
  return orders.items.filter(function(item) {
    return item.quantity >= orders.promotions.get('ITEM_PERCENTAGE_OFF').quantity &&  
          orders.promotions.get('ITEM_PERCENTAGE_OFF').skus.filter( sku =>  sku == item.sku).length > 0;  
    }).map(item => item.sku);
};
export const ITEM_PERCENTAGE_OFF = new Rule({
  name: 'ITEM_PERCENTAGE_OFF',
  priority: 10,
  when: [
    (orders) => skusInItemPercentageOff(orders).length > 0 
  ],
  then: (orders) => {  
    orders.items.forEach(function(item) { 
      if(skusInItemPercentageOff(orders).includes(item.sku)){
          let discount = orders.promotions.get('ITEM_PERCENTAGE_OFF').percentage * item.charge.skucharge;
          // console.log('ITEM_PERCENTAGE_OFF:'+orders.promotions.get('ITEM_PERCENTAGE_OFF').percentage + " * "+ item.charge.skucharge +' = '+discount);
          
          let promotion         = new Promotion();
          promotion.discount    = discount;
          promotion.level       = 'CartItem';
          promotion.description = orders.promotions.get('ITEM_PERCENTAGE_OFF').name  ;
          orders.appliedPromotions.push(promotion);
          
          item.charge.discount = discount;
        } 
    });
  },
});