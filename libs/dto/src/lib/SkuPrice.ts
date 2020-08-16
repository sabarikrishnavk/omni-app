import { InputType, ObjectType,Field } from "@nestjs/graphql";

@InputType()
@ObjectType()
export class SkuPrice {
    @Field()
    store?: string;
    @Field()
    sku?: string; 
    @Field()
    unitprice?: number; 
}
