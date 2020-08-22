import { InputType, ObjectType,Field } from "@nestjs/graphql";
import { CartItemRequest } from './CartItemRequest';
 
@ObjectType()
export class ShipModeGroupRequest {

    @Field()
    store?: string; 

    @Field(type =>[String])
    items?: Array<CartItemRequest>; 
  
}
