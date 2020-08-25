import { Args, Mutation, Query, Resolver , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';  
import { Product } from '@omni-app/dto';
import { ProductService } from './product.service';

@Resolver(of => Product)
export class ProductResolver {
  constructor( @Inject(ProductService)  private productService: ProductService  ) {
    
   }
  

  @Query(returns => Product)
  async getProduct(@Args('sku') sku: string): Promise<Product> {
      return await this.productService.getProduct(sku);
  }

  // @Mutation(returns => CartResponse)
  // async addItem(
  //   @Args('item') item: CartItemRequest,
  // ):Promise<CartResponse>{ 
  //       return  await this.cartService.addItem(item);
  // }

  
}