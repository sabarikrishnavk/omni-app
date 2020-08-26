import { Args, Mutation, Query, Resolver, ResolveReference , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common';  
import { Product } from '@omni-app/dto';
import { ProductService } from './product.service';

@Resolver(Product)
export class ProductResolver {
  constructor( @Inject(ProductService)  private productService: ProductService  ) {
    
   }
  

  @Query(returns => Product)
  async getProduct(@Args('sku') sku: string): Promise<Product> {
      return await this.productService.getProduct(sku);
  }

  @ResolveReference()
  resolveReference(reference: { __typename: string ; id: string }): Promise<Product>  {
    console.log('reference in product api :' + reference.id);
    return this.productService.getProduct(reference.id);
  }

  // @Mutation(returns => CartResponse)
  // async addItem(
  //   @Args('item') item: CartItemRequest,
  // ):Promise<CartResponse>{ 
  //       return  await this.cartService.addItem(item);
  // }

  
}