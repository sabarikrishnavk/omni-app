import { Module } from '@nestjs/common';
import { GraphQLFederationModule } from '@nestjs/graphql';
 
import { CartResolver } from './cart.resolver';
import { CartService} from './cart.service';

@Module({
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true //'cart-schema.gql'
    })
  ], 
  providers: [CartResolver,CartService],
  exports: [CartService]
})
export class AppModule {}
