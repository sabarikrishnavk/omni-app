import { Controller, Get, Header, Param, Render, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';
import { ServerResponse } from 'http';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @Render('index.hbs')
  root() {
    return { message: 'Hello world!' ,page:{header2: true}};
  }

  @Get("site/:siteId")
  @Render('index.hbs')
  project(@Param('siteId') siteId:string, @Res() res:ServerResponse) { 
    res.setHeader('site-id', siteId);
    return { message: siteId,page:{header2: true}};
  }
  @Get(':pageContextId')
  @Render('index.hbs')
  pageWithOutKey( @Req() req:Request , @Param('pageContextId') pageContextId:string ) {

    let siteId= req.headers['site-id'];

    console.log('Site Id: '+ siteId); 
    console.log('PageContextId Id: '+ pageContextId); 

    return { siteId: siteId, pageContextId:pageContextId  ,page:{header1: true}};
  }
  @Get(':pageContextId/:keyId')
  @Render('index.hbs')
  pageWithKey( @Req() req:Request , @Param('pageContextId') pageContextId:string , @Param('keyId') keyId:string) {

    let siteId= req.headers['site-id'];

    console.log('Site Id: '+ siteId); 
    console.log('PageContextId Id: '+ pageContextId);
    console.log('Key Id: '+ keyId);

    return { siteId: siteId, pageContextId:pageContextId ,  keyId: keyId ,page:{header1: true}};
  }

  @Get('site/1/1')
  getSites(){
    return this.appService.getData();
  }
   
}
