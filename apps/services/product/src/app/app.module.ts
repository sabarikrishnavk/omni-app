import { Module } from '@nestjs/common'; 
import { GraphQLFederationModule } from '@nestjs/graphql';
import { ProductResolver } from './product.resolver';
import { ProductService } from './product.service';
import { Product } from '@omni-app/dto';
 

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
