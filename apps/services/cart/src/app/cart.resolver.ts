import { Args, Mutation, Query, Resolver , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common'; 
import { CartResponse,CartItemRequest } from '@omni-app/dto';
import { CartService } from './cart.service';

@Resolver(of => CartItemRequest)
export class CartResolver {
  constructor( @Inject(CartService)  private cartService: CartService  ) {
    
   }
  

  @Query(returns => CartResponse)
  async getCartItems(@Args('userId') userId: string): Promise<CartResponse> {
    
      return await this.cartService.getCartItems(userId);
    
  }

  @Mutation(returns => CartResponse)
  async addItem(
    @Args('item') item: CartItemRequest,
  ):Promise<CartResponse>{ 
        return  await this.cartService.addItem(item);
       
  }

  
}