
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { CartCharges} from './CartCharges'; 
import { CartItem } from './CartItem'; 

// import { Payments } from './Payments';
// import { PromotionRuleConfig } from '../PromotionRuleConfig';
// import { Promotion } from '../Promotion';  

@ObjectType()
export class Cart {
  
    @Field()
    cartid?: string;

    @Field()
    userId?: string;

    @Field()
    store?:string;

    @Field(type =>[CartItem])
    items?: Array<CartItem> = [];

    @Field(type => CartCharges)
    charge?: CartCharges = new CartCharges(); 
}
