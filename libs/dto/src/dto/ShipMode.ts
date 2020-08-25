import { InputType, ObjectType,Field } from "@nestjs/graphql";

@InputType('ShipModeInput')
@ObjectType()
export class ShipMode{

    @Field()
    code?: string; 
    @Field()
    description?:string;
    @Field()
    shipCharge?: number; 
    @Field()
    edd?: string;
}
