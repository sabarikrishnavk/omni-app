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
  async pageWithKey( @Req() req:Request , @Param('pageContextId') pageContextId:string , @Param('keyId') keyId:string) {

    let siteId  = req.headers['site-id'];
    console.log('Site Id: '+ siteId); 
    console.log('PageContextId Id: '+ pageContextId); 
    console.log('keyId : '+ keyId); 

    //Query content for page from via keyId and select the page corresponding to the key return
    //For eg: if its products/sku1 ==select all pages configured for products/keyId and filter the page select for "sku1" else use the 0th element from array

    let sitePagesData = await this.appService.getPage(siteId.toString(),pageContextId+"/keyId");

    console.log('site page details'+JSON.stringify(sitePagesData));
    let query= sitePagesData.sitepages[0].templates.specs.schema.replace('#keyId','"'+keyId+'"'); 
    //console.log('query to fire : '+ query); 

    let data =await this.appService.getData(query);
    console.log('Key data : '+ JSON.stringify(data)); 

    let sitePageData = sitePagesData.sitepages[0];
    if(pageContextId =='products'){
      sitePageData.pageData=data.products[0];
    }


    return sitePageData;
  }

  @Get('site/1/1')
  getSites(){
    return this.appService.getSite();
  }
   
}
