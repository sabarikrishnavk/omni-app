import { InputType,ObjectType, Field, Directive, ID } from "@nestjs/graphql";

@ObjectType()
@InputType("ProductInput")
@Directive('@key(fields: "id")')
export class Product{ 

    @Field(() => ID)
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