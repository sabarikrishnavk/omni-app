
import { InputType,ObjectType, Field } from "@nestjs/graphql";

import { CreditCard } from './CreditCard';
import { GiftCard } from './GiftCard';

@InputType()
@ObjectType()
export class Payments {
    // @Field(type => CreditCard)
    creditCard?: CreditCard;
    // @Field(type =>[GiftCard])
    giftCards?: Array<GiftCard>;
}
