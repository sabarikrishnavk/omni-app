import { Module } from '@nestjs/common'; 
import { GraphQLFederationModule } from '@nestjs/graphql';
import { InventoryResolver } from './inventory.resolver';
import { InventoryService } from './inventory.service';
 

@Module({ 
  imports: [
    GraphQLFederationModule.forRoot({
      autoSchemaFile: true ,
      
    }),
    
  ], 
  providers: [InventoryResolver, InventoryService],
  exports: [InventoryService]
})
export class AppModule {}
