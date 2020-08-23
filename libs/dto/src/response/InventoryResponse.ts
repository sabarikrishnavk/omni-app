import { InputType,ObjectType, Field } from "@nestjs/graphql"; 
import { ProductResponse } from './ProductResponse'; 

@ObjectType()
@InputType(  "InventoryInput")
export class InventoryResponse{
    @Field()
    id : string;

    @Field({nullable: true})
    sku: string;

    @Field({nullable: true})
    location: string;

    @Field({nullable: true})
    stock: number;

    @Field(type => ProductResponse, {nullable: true})
    product : ProductResponse;
 
 
}