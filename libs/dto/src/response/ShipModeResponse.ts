import { InputType, ObjectType,Field } from "@nestjs/graphql";

// @InputType()
@ObjectType()
export class ShipModeResponse{

    @Field()
    code?: string; 
    @Field()
    description?:string;
    @Field()
    shipCharge?: number; 
    @Field()
    edd?: string;
}
