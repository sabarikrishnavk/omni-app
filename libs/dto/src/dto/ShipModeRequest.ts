import { InputType, ObjectType,Field } from "@nestjs/graphql"; 
import { CartItem } from './CartItem';
 
@ObjectType()
@InputType('ShipModeRequestInput')
export class ShipModeRequest {

    @Field()
    store?: string; 

    @Field(type =>[CartItem])
    items?: Array<CartItem>; 
  
}
