
import { InputType,ObjectType, Field } from "@nestjs/graphql"; 

@ObjectType()
export class Login {
  
    @Field()
    loginId?: string;

    @Field()
    password?: string; 
}
