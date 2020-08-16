
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import {ChargeResponse} from './ChargeResponse'; 
import { CartItemResponse } from './CartItemResponse'; 

// import { Payments } from './Payments';
// import { PromotionRuleConfig } from './PromotionRuleConfig';
// import { Promotion } from './Promotion';
// import { ShipModeGroup } from './ShipModeGroup'; 

@ObjectType()
export class CartResponse {
  
    @Field()
    cartid?: string;

    @Field()
    store?:string;

    @Field(type =>[CartItemResponse])
    items?: Array<CartItemResponse> = [];

    @Field(type => ChargeResponse)
    charge?: ChargeResponse = new ChargeResponse();
    // @Field(type => Payments )
    // payments?: Payments;

    // @Field(type => Charge)
    // charge?: ChargeDTO =new ChargeDTO();

    // @Field(type => [ShipModeGroup])
    // shipModes: Array<ShipModeGroup>     = new Array<ShipModeGroup>();

    // @Field(type => [Promotion])
    // appliedPromotions?:Array<Promotion> = new Array<Promotion>();

    
    // promotions?: Map<String,PromotionRuleConfig> =new Map<string,PromotionRuleConfig> ();;
 
}
