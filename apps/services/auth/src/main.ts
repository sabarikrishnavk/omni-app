/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import * as fs from 'fs';

import { AppModule } from './app/app.module';



async function bootstrap() {
  // const httpsOptions = {
  //   key: fs.readFileSync('./certs/server.key'),
  //   cert: fs.readFileSync('./certs/server.cert'),
  // };
  // const app = await NestFactory.create(AppModule, {
  //   httpsOptions,
  // });

  const app = await NestFactory.create(AppModule );
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  const port = process.env.PORT || 6001;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port + '/' + globalPrefix);
  });
}

bootstrap();
