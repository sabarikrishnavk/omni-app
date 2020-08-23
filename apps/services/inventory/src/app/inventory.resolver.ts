import { Args, Mutation, Query, Resolver, ResolveProperty, Parent , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';  
import { InventoryResponse,  ProductResponse } from '@omni-app/dto';
import { InventoryService } from './inventory.service';

@Resolver(InventoryResponse)
export class InventoryResolver {
  constructor( @Inject(InventoryService)  private inventoryService: InventoryService  ) {
    
   }
  

  @Query(returns => InventoryResponse)
  async getInventory(@Args('sku') sku: string,@Args('location') location: string ): Promise<InventoryResponse> {
      return await this.inventoryService.getInventory(sku,location);
  }

  //https://docs.nestjs.com/graphql/federation
  // @ResolveProperty('product')
  // async getProduct(@Parent() inventory: InventoryResponse) {
  //   return { __typename: ProductResponse, id: inventory.id };ß
  // }
  // @Mutation(returns => CartResponse)
  // async addItem(
  //   @Args('item') item: InventoryRequest,
  // ):Promise<CartResponse>{ 
  //       return  await this.cartService.addItem(item);
  // }

  
}