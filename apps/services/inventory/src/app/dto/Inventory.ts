import { InputType,ObjectType, Field, Directive, ID } from "@nestjs/graphql";  
import { InventoryProduct } from './InventoryProduct';

@ObjectType()
@InputType(  "InventoryInput")
@Directive('@key(fields: "id")')
export class Inventory{
 

    @Field(() => ID)
    id : string;

    @Field({nullable: true})
    sku: string;

    @Field({nullable: true})
    location: string;

    @Field({nullable: true})
    stock: number;

    @Field(type => InventoryProduct, {nullable: true})
    productDetail : InventoryProduct;
 
 
}