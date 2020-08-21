import { InputType,ObjectType, Field } from "@nestjs/graphql";
import { ChargeResponse } from './ChargeResponse';
import { ShipModeResponse } from './ShipModeResponse';
import { AttributesResponse } from './AttributesResponse';

 
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

    @Field(type => [AttributesResponse])
    attributes : AttributesResponse[];

    @Field(type => ShipModeResponse)
    shipMode: ShipModeResponse;
    
    @Field(type => ChargeResponse)
    charge?: ChargeResponse = new ChargeResponse();
}
