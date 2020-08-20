import {  Rule } from 'rools';
import { Promotion } from '@omni-app/dto';

export const ORD_PERCENTAGE_OFF = new Rule({
  name: 'ORD_PERCENTAGE_OFF',
  priority: 5,
  when: (orders) => orders.charge.skucharge >= orders.promotions.get('ORD_PERCENTAGE_OFF').total,
  then: (orders) => {
    let discount = orders.promotions.get('ORD_PERCENTAGE_OFF').percentage * orders.charge.skucharge;
    console.log('ORD_PERCENTAGE_OFF:'+orders.promotions.get('ORD_PERCENTAGE_OFF').percentage + " * "+ orders.charge.skucharge +' = '+discount);
    
    let promotion         = new Promotion();
    promotion.discount    = discount;
    promotion.level       = 'Cart';
    promotion.description = orders.promotions.get('ORD_PERCENTAGE_OFF').name  ;
    orders.appliedPromotions.push(promotion);

    orders.charge.discount = discount; 
  },
});

export const ORD_DOLLAR_OFF = new Rule({
  name: 'ORD_DOLLAR_OFF',
  priority: 5,
  when: (orders) => orders.charge.skucharge >= orders.promotions.get('ORD_DOLLAR_OFF').total,
  then: (orders) => {
    let discount = orders.promotions.get('ORD_DOLLAR_OFF').fixed ;
    console.log('ORD_DOLLAR_OFF:'+orders.promotions.get('ORD_DOLLAR_OFF').fixed + " added to "+ orders.charge.discount);
 
    let promotion         = new Promotion();
    promotion.discount    = discount;
    promotion.level       = 'Cart';
    promotion.description = orders.promotions.get('ORD_DOLLAR_OFF').name  ;
    orders.appliedPromotions.push(promotion);

    orders.charge.discount = orders.charge.discount + discount; 
  },
});  