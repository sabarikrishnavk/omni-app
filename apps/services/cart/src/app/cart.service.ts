import { Injectable } from '@nestjs/common'; 
import { CartResponse , CartItemRequest, CartItemResponse} from '@omni-app/dto';

@Injectable()
export class CartService {
  private sets: CartResponse[] =[] ;

  async getCartItems(cartid: string): Promise<CartResponse> {

    let itemDTO = new CartResponse();

    this.sets.map(item =>{
      console.log('cart -- '+ item.cartid)
      if(item.cartid == cartid){
        itemDTO = item;
      }
    })

    return itemDTO;
  }
  async addItem(item: CartItemRequest): Promise<CartResponse> {

     let cart = new CartResponse();
     cart.cartid = item.cartid;
     let itemResponse = new CartItemResponse();
     itemResponse.sku = item.sku;
     itemResponse.quantity = item.quantity; 

     cart.items.push(itemResponse);

     this.sets.push(cart);
     return cart;
  }
  getData(): { message: string } {
    return { message: 'Welcome to cart!' };
  }
}
