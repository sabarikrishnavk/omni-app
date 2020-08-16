import { InputType, ObjectType,Field } from "@nestjs/graphql";
import { Address } from './Address';
import { ShipMode } from './ShipMode';
 
// @InputType()
export class ShipModeGroup {

    @Field()
    store?: string; 

    @Field(type =>[String])
    skus?: Array<string>; 

    @Field(type => [ShipMode])
    modes?: Array<ShipMode>;

    @Field(type => Address)
    address?: Address;
    
    @Field(type => ShipMode)
    selectedCode?: ShipMode; 
}
