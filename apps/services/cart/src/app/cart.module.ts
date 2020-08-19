import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartResolver } from './cart.resolver';
import { CartService} from './cart.service';
import { Cart } from './cart.entity';
import { CartRepository } from './cart.repo';

@Module({
  imports: [TypeOrmModule.forFeature([CartRepository])], 
  providers: [CartService, CartResolver],
  exports: [CartService]
})
export class CartModule {}