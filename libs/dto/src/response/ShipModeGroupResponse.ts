import { InputType, ObjectType,Field } from "@nestjs/graphql";
import { AddressResponse } from './AddressResponse';
import { ShipModeResponse } from './ShipModeResponse';
 
@ObjectType()
export class ShipModeGroupResponse {

    @Field()
    store?: string; 

    @Field(type =>[String])
    skus?: Array<string>; 

    @Field(type => AddressResponse)
    address?: AddressResponse;

    @Field(type => [ShipModeResponse])
    modes?: Array<ShipModeResponse>; 
    
    @Field(type => ShipModeResponse)
    selectedCode?: ShipModeResponse; 
}
