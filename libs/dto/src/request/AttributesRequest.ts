import { InputType, Field } from "@nestjs/graphql"; 

@InputType() 
export class AttributesRequest {
    @Field()
    key?: string;
    @Field()
    value?: string; 
}
