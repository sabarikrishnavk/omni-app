import { Rools } from  'rools';
import { CartResponse , EligiblePromotion } from '@omni-app/dto'; 
import { PromotionService} from './client/promotion.service';

import { Injectable } from '@nestjs/common';  
@Injectable()
export class CalculateService {

    constructor(private readonly promotionService: PromotionService) {}

    async calculatePromotion (cart:CartResponse , applicablePromos:EligiblePromotion) :Promise<CartResponse> {  

   
        if(applicablePromos.item){   
            applicablePromos.item.map(rules =>  cart.promotions.set(rules.rule.name, rules.config) );  
            const rules         = applicablePromos.item.map(rules =>  rules.rule);  
            const orderitemsRule= new Rools(); 

            orderitemsRule.register(rules);
            orderitemsRule.evaluate(cart);
            // console.log("--item rules---");
            // console.log(orders);   
            // console.log("--------");
        }

        if(applicablePromos.order){  
            applicablePromos.order.map(rules => cart.promotions.set (rules.rule.name, rules.config)  );  
            const rules         = applicablePromos.order.map(rules =>  rules.rule);  
            const orderRule     = new Rools(); 
            orderRule.register(rules);
            orderRule.evaluate(cart); 
            // console.log("--order rules---");
            // console.log(orders);
            // console.log("--------");
        }  
        return cart;
    } 

}