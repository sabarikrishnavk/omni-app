import { InputType,ObjectType, Field } from "@nestjs/graphql"; 

// @InputType() 
@ObjectType()
export class AddressResponse {
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
