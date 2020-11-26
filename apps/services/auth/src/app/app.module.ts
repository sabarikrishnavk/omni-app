import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service'; 
import {JwtModule} from '@nestjs/jwt';

@Module({
  imports: [JwtModule.register(
    { 
      secret: 'hard!to-guess_secret' ,
      signOptions: { expiresIn: '7d' }
    })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
