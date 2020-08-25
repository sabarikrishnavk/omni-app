
import { InputType,ObjectType, Field } from "@nestjs/graphql"; 
import { Attributes } from './Attributes';
import { CartItemFulfillment } from './CartItemFulfillment';
import { ShipMode } from './ShipMode';
import { CartCharges } from './CartCharges';

@InputType('CartItemInput')
@ObjectType() 
export class CartItem {  
 
    @Field()
    userId?: string;

    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

    @Field()
    unitprice?: number;

    @Field(type => [Attributes], { nullable: true })
    attributes : Attributes[];

    @Field (type => CartItemFulfillment)
    fulfillment : CartItemFulfillment;

    @Field(type => ShipMode, {nullable : true})
    shipMode: ShipMode;
    
    @Field(type => CartCharges)
    charge?: CartCharges = new CartCharges();
 
}
