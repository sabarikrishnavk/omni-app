
import { InputType,ObjectType, Field } from "@nestjs/graphql"; 
 
import { Cart } from './Cart'; 
import { Promotion } from './Promotion';
import { PromotionRuleConfig } from './PromotionRuleConfig';

@ObjectType()
export class CartPromotion extends Cart { 
 
    appliedPromotions?:Array<Promotion> = new Array<Promotion>(); 
    promotions?: Map<String,PromotionRuleConfig> =new Map<string,PromotionRuleConfig> ();;
 
}
