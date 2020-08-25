import { Field, ObjectType, InputType } from "@nestjs/graphql"; 

@ObjectType() 
@InputType("AttributeInput")
export class Attributes {
    @Field()
    key?: string;
    @Field()
    value?: string; 
}
