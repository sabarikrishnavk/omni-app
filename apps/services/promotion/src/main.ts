/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { PromotionModule } from './app/promotion.module';

async function bootstrap() {
  const app = await NestFactory.create(PromotionModule);
  const globalPrefix = 'api/v1/promotion';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 5002;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
