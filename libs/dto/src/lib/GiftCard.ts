
import { InputType,ObjectType, Field } from "@nestjs/graphql";

@InputType()
@ObjectType()
export class GiftCard {
    @Field()
    pan?: string;
    @Field()
    pin?: string;
}
