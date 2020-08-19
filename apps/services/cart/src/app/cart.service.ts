import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { CartResponse , CartItemRequest, CartItemResponse} from '@omni-app/dto'; 
import { CartRepository } from './cart.repo';
import { Cart } from './cart.entity';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(CartRepository) private readonly cartRepository: CartRepository,
  ) {} 


  private sets: CartResponse[] =[] ;

  async getCartItems(cartid: string): Promise<CartResponse> {

    let itemDTO = new CartResponse();
    console.log('find -- ')
    let cart = await this.cartRepository.findOneOrFail(cartid);

    console.log('find -- '+ cart)
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

     let cartDB =  new Cart();
     cartDB.store = 'store1';
     cartDB.lastChangedBy = 'sabari';
     cartDB.createdBy = 'sabari';
     cartDB.description = 'Save Cart';
     cartDB = await this.cartRepository.save(cartDB);
     
     console.log('Saved cartDB : ' + cartDB.id);
     cart.cartid = cartDB.id;
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
