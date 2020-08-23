import { InputType,ObjectType, Field } from "@nestjs/graphql";

@ObjectType()
export class InventoryResponse{
    @Field()
    id : string;

    @Field({nullable: true})
    sku: string;

    @Field({nullable: true})
    location: string;

    @Field({nullable: true})
    stock: number;
 
 
}