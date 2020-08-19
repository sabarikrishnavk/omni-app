
import { Entity, Column } from 'typeorm';

import { BaseEntity} from './base.entity';

@Entity({ name: 'cart' })
export class Cart extends BaseEntity{ 

  @Column({ type: 'varchar', length: 300 })
  store: string;

  @Column({ type: 'varchar', length: 300 })
  description: string;
}