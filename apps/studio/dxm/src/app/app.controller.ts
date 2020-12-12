import { Controller, Get, Param, Render } from '@nestjs/common';
import {hbs} from 'hbs';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello world!' ,page:{header2: true}};
  }
  @Get('product/:id')
  @Render('index.hbs')
  product(@Param('id') id:string) {
    return { message: id ,page:{header1: true}};
  }
  @Get('category/:id')
  @Render('index.hbs')
  category(@Param('id') id:string) {
    return { message: id ,page:{header1: true}};
  }
  @Get('static/:id')
  @Render('index.hbs')
  static(@Param('id') id:string) {
    return { message: id ,page:{header1: true}};
  }
}
