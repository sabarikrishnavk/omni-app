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
    return { message: 'Hello world!' ,widgets:{header: "header2"},components:{ menu: "menu1" }};
  }

  // @Get("site/:siteId")
  // @Render('index.hbs')
  // project(@Param('siteId') siteId:string, @Res() res:ServerResponse) { 
  //   res.setHeader('site-id', siteId);
  //   return { message: siteId,page:{header2: true}};
  // }


  @Get(':pageContextId')
  @Render('index.hbs')
  async pageWithOutKey( @Req() req:Request , @Param('pageContextId') pageContextId:string ) {

    let siteId  = req.headers['site-id'];
    console.log('Site Id: '+ siteId); 
    console.log('PageContextId Id: '+ pageContextId); 


    let data = await this.appService.getPage(siteId.toString(),pageContextId);

    console.log('site page details'+JSON.stringify(data));

    return data.sitepages[0];
  }
  @Get(':pageContextId/:keyId')
  @Render('index.hbs')
  pageWithKey( @Req() req:Request , @Param('pageContextId') pageContextId:string , @Param('keyId') keyId:string) {

    let siteId= req.headers['site-id'][0];

    console.log('Site Id: '+ siteId); 
    console.log('PageContextId Id: '+ pageContextId);
    console.log('Key Id: '+ keyId);

    return { siteId: siteId, pageContextId:pageContextId ,  keyId: keyId ,page:{header1: true}};
  }

  @Get('site/1/1')
  getSites(){
    return this.appService.getSite();
  }
   
}
