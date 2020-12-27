import { Controller, Get, Header, Param, Render, Req, Res } from '@nestjs/common';

import { Request, Response } from 'express';
import { ServerResponse } from 'http';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  DAM_URL:string = "http://localhost:3000/dam/";
  @Get() 
  root(@Req() req:Request) {
    let siteId  = req.headers['site-id'];
    console.log('Site Id: '+ siteId); 
    if(siteId == null){
      return ;
    }
    return "<a href='/shop'>shop<a>";
  } 

  @Get(':pageContextId')
  @Render('index.hbs')
  async pageWithOutKey( @Req() req:Request , @Param('pageContextId') pageContextId:string ) {

    let siteId  = req.headers['site-id'];
    console.log('Site Id: '+ siteId); 
    if(pageContextId =='favicon.ico' || siteId == null){
      return ;
    }
    console.log('PageContextId Id: '+ pageContextId); 


    let sitePagesData = await this.appService.getPage(siteId.toString(),pageContextId);
 
    console.log('site page details'+JSON.stringify(sitePagesData));
    let sitePageData = sitePagesData.sitepages[0];   

    let cartsid = req.cookies['cartsid'];// "5068186e-1246-4b62-acb1-59f6f1739447";
    console.log('cookies :'+JSON.stringify(req.cookies));

    console.log('cartsid '+ cartsid);
    if(pageContextId =='cart'){

      if(cartsid == null){
        cartsid ='';
      }
      let query= sitePagesData.sitepages[0].templates.specs.schema.replace('#keyId','"'+cartsid+'"');  
      let data =await this.appService.getData(query);
      console.log('Key data : '+ JSON.stringify(data)); 
      sitePageData.pageData=data.carts[0]; 
    }
    //console.log('query to fire : '+ query); 

    sitePageData.configData={"dam-url":this.DAM_URL};

    return sitePageData;
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
    if(pageContextId =='cart'){
      sitePageData.pageData=data.carts[0];
    }
    sitePageData.configData={"dam-url":this.DAM_URL};

    return sitePageData;
  } 
   
}
