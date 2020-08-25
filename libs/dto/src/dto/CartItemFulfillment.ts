import { InputType, ObjectType,Field } from "@nestjs/graphql"; 
import { Address } from './Address';
 

@ObjectType()
@InputType("CartItemFulfillmentInput")
export class CartItemFulfillment{

    @Field()
    code?: string; 

    @Field(type => Address, { nullable: true })
    shipAddress?: Address;
    
    @Field(type => Address, { nullable: true })
    pickAddress?: Address; 

}
