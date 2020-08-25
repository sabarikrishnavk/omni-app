import { Args, Mutation, Query, Resolver , } from '@nestjs/graphql';
import { Inject } from '@nestjs/common'; 
import { Cart ,CartItem } from '@omni-app/dto';
import { CartService } from './cart.service';

@Resolver(of => CartItem)
export class CartResolver {
  constructor( @Inject(CartService)  private cartService: CartService  ) {
    
   }
  

  @Query(returns => Cart)
  async getCart(@Args('userId') userId: string): Promise<Cart> {
      return await this.cartService.getCart(userId);
  }

  @Mutation(returns => Cart)
  async addItem(
    @Args('item') item: CartItem,
  ):Promise<Cart>{ 
        return  await this.cartService.addItem(item);
  }

  
}