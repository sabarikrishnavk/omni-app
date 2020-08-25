
import { PromotionRule, EligiblePromotion ,CartPromotion } from '@omni-app/dto'; 
import { ORD_PERCENTAGE_OFF ,ORD_DOLLAR_OFF } from '../rules/order';
import { ITEM_PERCENTAGE_OFF } from '../rules/order-item'; 

import { Injectable } from '@nestjs/common'; 


@Injectable()
export class PromotionService {


    //Query eligible promotions from promotion elastic service
    //Filter from order/shipping level promotions which are eligible for this cart

    async getEligiblePromotions(cart: CartPromotion ): Promise<EligiblePromotion>{  
        let applicablePromos    = new EligiblePromotion();
        applicablePromos.order  = new Array<PromotionRule>();
        applicablePromos.item   = new Array<PromotionRule>(); 

        let orderRule1 ={ 
                        rule : ORD_PERCENTAGE_OFF ,
                        config : {
                            name : "10% of for all orders more than 100",
                            total : 200,
                            percentage: 0.1
                        } 
                    };
        let orderRule2=  { 
                            rule : ORD_DOLLAR_OFF ,
                            config : {
                                name : "$10 off for all orders more than 100",
                                total : 100,
                                fixed: 10
                            } 
                        } ;
        applicablePromos.order.push(orderRule1);
        applicablePromos.order.push(orderRule2);


        let itemRule1=  new PromotionRule();
        itemRule1 = { 
                        rule : ITEM_PERCENTAGE_OFF ,
                        config : {
                            name : "10% of for all product in category CAT1", 
                            skus: ["SKU1","SKU3"],
                            quantity: 2,
                            percentage: 0.1
                        } 
                    } 
        applicablePromos.item.push(itemRule1);

        console.log('applicable promotions ' +applicablePromos);
        return applicablePromos;
    } 
 
}   


