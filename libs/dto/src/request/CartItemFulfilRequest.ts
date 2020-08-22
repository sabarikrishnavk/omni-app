import { InputType, ObjectType,Field } from "@nestjs/graphql"; 
import { AddressRequest } from './AddressRequest';
 

// @InputType()
@InputType()
export class CartItemFulfilRequest {

    @Field()
    code?: string; 

    @Field(type => AddressRequest, { nullable: true })
    shipAddress?: AddressRequest;
    
    @Field(type => AddressRequest, { nullable: true })
    pickAddress?: AddressRequest; 

}
