
import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { AttributesRequest } from '../request/AttributesRequest';
 
@InputType() 
export class CartItemRequest {  
 
    @Field()
    userId?: string;
    
    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

    @Field(type => [AttributesRequest])
    attributes : AttributesRequest[];
 
}
