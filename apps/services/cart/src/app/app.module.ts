import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLFederationModule } from '@nestjs/graphql';

import { CartModule} from './cart.module';
import { Cart } from './cart.entity';

@Module({ 
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true //'cart-schema.gql'
    }), 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'testuser',
      password: 'password',
      database: 'testdb',
      entities: [Cart],
      synchronize: true,
    }) ,
    CartModule
  ]
})
export class AppModule {}
