
import { InputType,ObjectType, Field } from "@nestjs/graphql"; 

@ObjectType()
export class Users {
   

    @Field()
    usersId?: string;

    @Field()
    firstName?:string;

    @Field()
    lastName?:string; 

    @Field()
    loginId?: string;
    
    @Field()
    password?: string; 

    @Field()
    token?: string; 

    @Field()
    role?: string;  
}
