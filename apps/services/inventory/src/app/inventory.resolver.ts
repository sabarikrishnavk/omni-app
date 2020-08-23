import { Args, Mutation, Query, Resolver , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';  
import { InventoryResponse, InventoryRequest } from '@omni-app/dto';
import { InventoryService } from './inventory.service';

@Resolver(of => InventoryRequest)
export class InventoryResolver {
  constructor( @Inject(InventoryService)  private inventoryService: InventoryService  ) {
    
   }
  

  @Query(returns => InventoryResponse)
  async getInventory(@Args('sku') sku: string,@Args('location') location: string ): Promise<InventoryResponse> {
      return await this.inventoryService.getInventory(sku,location);
  }

  // @Mutation(returns => CartResponse)
  // async addItem(
  //   @Args('item') item: InventoryRequest,
  // ):Promise<CartResponse>{ 
  //       return  await this.cartService.addItem(item);
  // }

  
}