import { InputType,ObjectType, Field } from "@nestjs/graphql"; 
import { Product } from './Product'; 

@ObjectType()
@InputType(  "InventoryInput")
export class Inventory{
    @Field()
    id : string;

    @Field({nullable: true})
    sku: string;

    @Field({nullable: true})
    location: string;

    @Field({nullable: true})
    stock: number;

    @Field(type => Product, {nullable: true})
    productDetail : Product;
 
 
}