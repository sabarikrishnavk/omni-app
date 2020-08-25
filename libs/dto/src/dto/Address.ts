import { ObjectType, Field, InputType } from "@nestjs/graphql"; 

@ObjectType()
@InputType("AddressInput")
export class Address {
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

