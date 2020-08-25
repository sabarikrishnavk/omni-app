
import { Entity, Column } from 'typeorm'; 
import { CartItem ,BaseEntity } from '@omni-app/dto';

@Entity({ name: 'cart' })
export class CartDB extends BaseEntity{ 

  @Column({ type: 'varchar', length: 300 })
  store: string;


  @Column({ type: 'varchar', length: 300 })
  userId: string;

  @Column({ type: 'jsonb'})
  items: CartItem[];

  
} 
 