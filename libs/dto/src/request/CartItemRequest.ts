
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { Attributes } from '../lib/Attributes';
 
@InputType() 
export class CartItemRequest {  
 
    @Field()
    userId?: string;


    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

    @Field(type => [Attributes])
    attributes : Attributes[];
 
}
