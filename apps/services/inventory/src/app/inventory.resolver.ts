import { Args, Mutation, Query, Resolver, ResolveProperty, Parent , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';  
import { Inventory,  Product } from '@omni-app/dto';
import { InventoryService } from './inventory.service';

@Resolver(Inventory)
export class InventoryResolver {
  constructor( @Inject(InventoryService)  private inventoryService: InventoryService  ) {
    
   }
  

  @Query(returns => Inventory)
  async getInventory(@Args('sku') sku: string,@Args('location') location: string ): Promise<Inventory> {
      return await this.inventoryService.getInventory(sku,location);
  }

  //https://docs.nestjs.com/graphql/federation
  @ResolveProperty('product',  type => Product)
  async getProduct(@Parent() inventory: Inventory) {
    return { __typename: Product, id: inventory.id };
  }
  // @Mutation(returns => CartResponse)
  // async addItem(
  //   @Args('item') item: InventoryRequest,
  // ):Promise<CartResponse>{ 
  //       return  await this.cartService.addItem(item);
  // }

  
}