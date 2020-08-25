
import { InputType, ObjectType,Field } from "@nestjs/graphql";

import { ContactAddress } from './ContactAddress';

@InputType()
@ObjectType()
export class CreditCard {
    @Field()
    pan?: string;
    @Field()
    expMonth?: string;
    @Field()
    expYear?: string;
    @Field()
    cvv?: string;

    // @Field(type =>ContactAddress)
    // address?: ContactAddress;
}
