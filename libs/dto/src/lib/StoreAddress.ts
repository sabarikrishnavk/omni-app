import { InputType, ObjectType,Field } from "@nestjs/graphql";
// import { Address } from './Address';

@InputType()
@ObjectType()
export class StoreAddress{ 
    @Field()
    storeId?: string;
    @Field()
    phone?: string;
    @Field()
    email?: string;
}
