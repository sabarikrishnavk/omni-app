
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { AttributesRequest } from '../request/AttributesRequest';
import { CartItemFulfilRequest } from './CartItemFulfilRequest';
 
@InputType() 
export class CartItemRequest {  
 
    @Field()
    userId?: string;

    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

    @Field(type => [AttributesRequest], { nullable: true })
    attributes : AttributesRequest[];

    @Field (type => CartItemFulfilRequest)
    fulfillment : CartItemFulfilRequest;
 
}
