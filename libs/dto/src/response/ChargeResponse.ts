import { InputType,ObjectType, Field } from "@nestjs/graphql";
 
@ObjectType()
export class ChargeResponse {
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
