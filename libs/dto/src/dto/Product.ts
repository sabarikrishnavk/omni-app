import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { Inventory } from './Inventory';

@ObjectType()
@InputType("ProductInput")
export class Product{
    @Field()
    id : string;

    @Field({nullable: true})
    sku: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    description: string;

    @Field({nullable: true})
    image : string;

    @Field({nullable: true})
    brand : string;

    @Field({nullable: true})
    manufacturer : string; 
 
}