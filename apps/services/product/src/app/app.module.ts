import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
 

@Module({ 
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true 
    }),
    
  ], 
  providers: [ProductResolver, ProductService],
  exports: [ProductService]
})
export class AppModule {}
