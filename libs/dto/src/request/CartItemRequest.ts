
import { InputType,ObjectType, Field } from "@nestjs/graphql";
 
@InputType() 
export class CartItemRequest {  

    @Field()
    cartid?: string;

    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

  
 
}
