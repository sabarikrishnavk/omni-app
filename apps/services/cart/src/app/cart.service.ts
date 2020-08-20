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

  async getCart(userId: string): Promise<CartResponse> {

    let cart = new CartResponse();
    console.log('find -- ')
    let cartDb = await this.cartRepository.getCartForUser(userId);
    cart.cartid = cartDb[0].id; 
    console.log('cart -- '+ cartDb[0]) 

    return cart;
  }
  async addItem(item: CartItemRequest): Promise<CartResponse> {

    let cart = new CartResponse();

    let cartDB =  new Cart();
    cartDB.store = 'store1';
    cartDB.lastChangedBy = 'sabari';
    cartDB.createdBy = 'sabari'; 
    cartDB.userId = item.userId;
    
    if(cartDB.items == null){  
      cartDB.items = [];
    }

    cartDB.items.push(item);


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
}
