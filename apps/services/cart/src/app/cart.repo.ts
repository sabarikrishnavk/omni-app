
import { EntityRepository, Repository } from 'typeorm';
import { CartDB } from './cart.entity';

@EntityRepository(CartDB)
export class CartRepository extends Repository<CartDB> {

     async getCartForUser(userId: string):Promise<CartDB[]>{
        return await this.find({where: [{userId : userId}]});
    }
}