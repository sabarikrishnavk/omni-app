import { ObjectType, Field, InputType } from "@nestjs/graphql";
 
@ObjectType()
@InputType('ChargeInput')
export class CartCharges {
    @Field()
    skucharge: number  = 0;
    @Field()
    shipping: number   = 0;
    @Field()
    discount?: number   = 0;
    @Field()
    tax?: number        = 0;
    @Field()
    total?: number      = 0; 
}
