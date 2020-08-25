import { InputType, ObjectType,Field } from "@nestjs/graphql";

@InputType('SkuPriceInput')
@ObjectType()
export class SkuPrice {
    @Field()
    store?: string;
    @Field()
    sku?: string; 
    @Field()
    unitprice?: number; 
}
