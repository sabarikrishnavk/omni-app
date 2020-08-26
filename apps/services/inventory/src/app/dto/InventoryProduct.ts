import { InputType,ObjectType, Field, Directive, ID } from "@nestjs/graphql";
import { Inventory } from './Inventory';
import { type } from 'os';

@ObjectType('Product')
@Directive('@extends')
@Directive('@key(fields: "id")')
@InputType("InventoryProductInput")
@Directive('@key(fields: "id")')
export class InventoryProduct{ 

    @Field(() => ID)
    @Directive('@external')
    id : string; 
 
}