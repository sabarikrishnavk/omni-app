import { InputType, ObjectType,Field } from "@nestjs/graphql"; 
 

// @InputType()
// @ObjectType()
export class ContactAddress {  

    @Field()
    firstName?: string;
    @Field()
    lastName?: string;
    @Field()
    phone?: string;
    @Field()
    fax?: string;
    @Field()
    email?: string;
}
