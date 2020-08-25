import { InputType, ObjectType,Field } from "@nestjs/graphql";

import { ContactAddress } from './ContactAddress';
import { StoreAddress } from './StoreAddress'; 


// @InputType()
@ObjectType()
export class FulfillmentInformation {

    @Field()
    code?: string;

    @Field()
    shipCharge?: number;

    // @Field(type => ContactAddress)
    shipAddress?: ContactAddress;
    
    // @Field(type => StoreAddress)
    pickAddress?: StoreAddress;

    attributes?: Map<string,string>;
}
