import { Body, Controller, Get, Post } from '@nestjs/common';

import { AppService } from './app.service';
import { Login } from '@omni-app/dto'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getData() {
    return this.appService.getData();
  }

  @Post("/authenticate")
  authenticate(@Body() login:Login) {
    return this.appService.authenticate(login);
  }
  @Post("/event")
  event(@Body() eventMessage:string) { 
    console.log("eventMessage : "+ JSON.stringify(eventMessage));
    let message = {"message":"OK"};
    return message;
  }
}
