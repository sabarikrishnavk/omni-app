import { InputType, Field } from "@nestjs/graphql"; 

@InputType() 
export class Attributes {
    @Field()
    key?: string;
    @Field()
    value?: string; 
}
