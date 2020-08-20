
import { EntityRepository, Repository } from 'typeorm';
import { Cart } from './cart.entity';

@EntityRepository(Cart)
export class CartRepository extends Repository<Cart> {

     async getCartForUser(userId: string):Promise<Cart[]>{
        return await this.find({where: [{userId : userId}]});
    }
}