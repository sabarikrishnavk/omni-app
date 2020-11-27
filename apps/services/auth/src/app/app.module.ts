import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register(
    { 
      secret: 'IWri29qyRTq3VWyRnaSdOjiZJPNCeiynXe2hchPRH-7pZOpgwSHlCIt_2fYjBb3Pb6Ep8UF0y36qnpJHBScge-OkdQdBvw7LVFcqkB7enrOrUS7Xx71L41-r_TEtAiYfxrWGoeiugBUfxqG50TpR2qGBBZXzkwXXdHCvdTNw2INranwpnuq3KErCR1Ql8M-2DwSmPfB1Q1NMz9Kakmjb4FWPNCIa7UN_m9bYrU72lSuFZDMDPju_Dyvyx3_emT9VfaDjuScYQGhpz0CSty-aRvFGz3WF9FRwkTFsscI3K6XlZiiKrsZ3bH1LokL8Crr7hhnwrw7Moq-J_3yc_cFsCQ' ,
      signOptions: { expiresIn: '7d' }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
