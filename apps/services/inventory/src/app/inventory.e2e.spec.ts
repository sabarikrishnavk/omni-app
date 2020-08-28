import { Test, TestingModule } from '@nestjs/testing'; 
import { INestApplication, ValidationPipe } from '@nestjs/common';
import { AppModule} from './app.module';
import * as request  from 'supertest';
import { GraphQLModule } from '@nestjs/graphql';
import { Inventory } from './dto/Inventory';

describe('Inventory service -e2e Testing',()=>{

    let app: INestApplication;

    beforeAll(async () => {
      const moduleRef: TestingModule = await Test.createTestingModule({
        imports: [ 
          AppModule
        ],
      }).compile();

      app = moduleRef.createNestApplication();
      // app.useGlobalPipes(
      //   new ValidationPipe({
      //     transform: true,
      //     whitelist: true,
      //     forbidNonWhitelisted: true,
      //     skipMissingProperties: false,
      //     forbidUnknownValues: true,
      //   }),
      // );

      await app.init(); 
  });
  afterAll(async () => {
    await app.close();
  }); 

  const item: Inventory = {
    id : "1958",
    sku: "1958",
    stock: 10 ,
    location : "1"
  };
  let id: string = '';

  const createitemObject = JSON.stringify(item).replace(
    /\"([^(\")"]+)\":/g,
    '$1:',
  );

  // const createItemQuery = `
  //   mutation {
  //     createItem(input: ${createitemObject}) {
  //       title
  //       price
  //       description
  //       id
  //     }
  //   }`;
   

  it('getInventory e2e', () => {
    return request(app.getHttpServer())
      .post('/graphql')
      .send({
        operationName: null,
        query: '{ getInventory(sku :"1958",location:"0"){ id , sku ,stock  } }',
      })
      .expect(({ body }) => { 
        const data = body.data.getInventory;
        const itemResult = data;  
        // expect(data.length).toBeGreaterThan(0);
        expect(itemResult.id).toBe(item.id);
        expect(itemResult.sku).toBe(item.sku);
        expect(itemResult.stock).toBe(item.stock);
      })
      .expect(200);
  });

});
