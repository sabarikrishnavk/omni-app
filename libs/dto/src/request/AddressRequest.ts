import {  Field, InputType } from "@nestjs/graphql"; 

@InputType()
export class AddressRequest {
    @Field()
    id?: number;
    @Field()
    addressLine?: string;
    @Field()
    city?: string;
    @Field()
    state?: string;
    @Field()
    country?: string;
}
