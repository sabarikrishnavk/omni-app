 
import { InputType, ObjectType,Field } from "@nestjs/graphql";
import {PromotionRule} from './PromotionRule';

@InputType()
@ObjectType()
export  class Promotion {
    
    rule?:PromotionRule;

    @Field()
    code?: string;
    @Field()
    level?: string;// Order , OrderItem, Shipping
    @Field()
    type?: string;// promotion codes, loyality cards
    @Field()
    discount?: number;
    @Field()
    description?: string;
}
