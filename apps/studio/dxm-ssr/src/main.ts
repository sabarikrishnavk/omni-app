import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import * as path from 'path';
import * as fs from 'fs';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.setBaseViewsDir(join(__dirname, 'assets', 'views'));
  app.setViewEngine('hbs');  
  //Load partials files from different folders recursively
  var dir = join(__dirname, '/assets/views/partials/');
//console.log(partialsDir);

  const loadFiles = (dir, filelist = []) => {
    fs.readdirSync(dir).forEach(file => {

      filelist = fs.statSync(join(dir, file)).isDirectory()
        ? loadFiles(join(dir, file), filelist)
        : filelist.concat(join(dir, file));

    });
    return filelist;
  }

  var filelist = loadFiles(dir);
  if (filelist.length > 0) {
    filelist.forEach(function (filename) {
      var matches = /^([^.]+).hbs$/.exec(path.basename(filename));
      if (!matches) {
        return;
      }
      var name = matches[1];
      console.log('loading partials: '+ name +' : from file '+filename);
      var template = fs.readFileSync(filename, 'utf8');
      hbs.registerPartial(name, template);
    });
  } 

  //Register a new helper
  hbs.registerHelper('equal', function(lvalue, rvalue, options) {
    // console.log('equal :'+ lvalue + " : "+ rvalue);
    if (arguments.length < 3)
        throw new Error("Handlebars Helper equal needs 2 parameters");
    if( lvalue!=rvalue ) {
        return options.inverse(this);
    } else {
        return options.fn(this);
    }
  }); 

  hbs.registerHelper('contains', function(key, options) {
    // console.log('contains :'+ key);
    if (key !=null && key != 'undefined') { 
      return options.fn(this); 
    } else { 
      return options.inverse(this);
    }
  }); 

  hbs.registerHelper('partial',function (name) {
    // console.log('partial: '+name);
    return name;
  });
  hbs.registerHelper('content',function (contents, key, options) {

    var details = null; 
    for (var i=0;i <contents.length;i ++){
      var content = contents[i];
      if(content.details.pagecontentname == key){
        console.log('content: '+content.details.pagecontentname +' : '+ key);
        details = content.details;
      } 
    }
    if (details !=null ) { 
      console.log('content: '+details.pagecontentname+' : '+ key);
      return options.fn(details); 
    } else { 
      return options.inverse(this);
    }
  });
  
  const port = process.env.PORT || 3333;
  await app.listen(port, () => {
    Logger.log('Listening at http://localhost:' + port);
  });
}

bootstrap();