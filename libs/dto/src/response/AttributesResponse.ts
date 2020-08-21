import { Field, ObjectType } from "@nestjs/graphql"; 

@ObjectType() 
export class AttributesResponse {
    @Field()
    key?: string;
    @Field()
    value?: string; 
}
