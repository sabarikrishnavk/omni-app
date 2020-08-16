import { Test } from '@nestjs/testing';

import { CartService } from './cart.service';

describe('CartService', () => {
  let service: CartService;

  beforeAll(async () => {
    const app = await Test.createTestingModule({
      providers: [CartService],
    }).compile();

    service = app.get<CartService>(CartService);
  });

  describe('getData', () => {
    it('should return "Welcome to cart!"', () => {
      expect(service.getData()).toEqual({ message: 'Welcome to cart!' });
    });
  });
});
