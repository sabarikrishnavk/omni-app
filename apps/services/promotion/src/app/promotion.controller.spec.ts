import { Test, TestingModule } from '@nestjs/testing';

import { PromotionController } from './promotion.controller'; 

describe('PromotionController', () => {
  let app: TestingModule;

  beforeAll(async () => {
    app = await Test.createTestingModule({
      controllers: [PromotionController],
      // providers: [AppService],
    }).compile();
  });

  // describe('getData', () => {
  //   it('should return "Welcome to promotion-api!"', () => {
  //     const appController = app.get<AppController>(AppController);
  //     expect(appController.getData()).toEqual({
  //       message: 'Welcome to promotion-api!',
  //     });
  //   });
  // });
});
