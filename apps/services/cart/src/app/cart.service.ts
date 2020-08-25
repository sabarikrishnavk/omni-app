import { Injectable } from '@nestjs/common'; 
import { InjectRepository } from '@nestjs/typeorm'; 
import { Cart , CartItem } from '@omni-app/dto'; 
import { CartRepository } from './cart.repo';
import { CartDB } from './cart.entity';

@Injectable()
export class CartService {

  constructor(
    @InjectRepository(CartRepository) private readonly cartRepository: CartRepository,
  ) {} 


  private sets: Cart[] =[] ;

  async getCart(userId: string): Promise<Cart> {

    let cart = new Cart();
    console.log('find -- ')
    let cartDBUser = await this.cartRepository.getCartForUser(userId);

    let cartDB = cartDBUser[0];
    cart.cartid = cartDB.id; 
    console.log('cart -- '+ cartDB);

    cart.cartid = cartDB.id;
    cart.userId = cartDB.userId
    cart.items = cartDB.items;

    return cart;
  }
  async addItem(item: CartItem): Promise<Cart> {

    let cart = new Cart();

    let cartDB =  new CartDB();
    cartDB.store = 'store1';
    cartDB.lastChangedBy = 'sabari';
    cartDB.createdBy = 'sabari'; 
    cartDB.userId = item.userId;
    
    if(cartDB.items == null){  
      cartDB.items = [];
    }

    cartDB.items.push(item);


    cartDB = await this.cartRepository.save(cartDB);
      
    cart.cartid = cartDB.id;
    cart.userId = cartDB.userId
    cart.items = cartDB.items;
    return cart;
  }
}
