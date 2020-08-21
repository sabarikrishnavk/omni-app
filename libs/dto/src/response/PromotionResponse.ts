
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { ChargeResponse} from './ChargeResponse'; 
import { CartItemResponse } from './CartItemResponse'; 

// import { Payments } from './Payments';
import { PromotionRuleConfig } from '../lib/PromotionRuleConfig';
import { Promotion } from '../lib/Promotion';
import { CartResponse } from './CartResponse';
// import { ShipModeGroup } from './ShipModeGroup'; 

@ObjectType()
export class PromotionResponse extends CartResponse { 
 
    appliedPromotions?:Array<Promotion> = new Array<Promotion>(); 
    promotions?: Map<String,PromotionRuleConfig> =new Map<string,PromotionRuleConfig> ();;
 
}
