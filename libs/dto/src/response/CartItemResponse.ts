import { InputType,ObjectType, Field } from "@nestjs/graphql";
import {ChargeResponse} from './ChargeResponse';

 
@ObjectType()
export class CartItemResponse {
    @Field()
    id?: string;

    @Field()
    sku?: string;
    
    @Field()
    quantity?: number;

    @Field()
    unitprice?: number;
    
    // @Field(type => Map) 
    attributes?: Map<string,string>; //cart item attributes 

    // @Field(type => Map) 
    skuattributes? :Map<string,string>; //cart item attributes 


    @Field(type => ChargeResponse)
    charge?: ChargeResponse = new ChargeResponse();
}
