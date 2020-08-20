
import { Entity, Column } from 'typeorm'; 
import { CartItemRequest ,BaseEntity } from '@omni-app/dto';

@Entity({ name: 'cart' })
export class Cart extends BaseEntity{ 

  @Column({ type: 'varchar', length: 300 })
  store: string;


  @Column({ type: 'varchar', length: 300 })
  userId: string;

  @Column({ type: 'jsonb'})
  items: CartItemRequest[];

  
} 
 