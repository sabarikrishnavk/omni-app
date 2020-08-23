import { Injectable ,HttpException } from '@nestjs/common';
import { InventoryResponse } from '@omni-app/dto';
 
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'

@Injectable()
export class InventoryService {
    private readonly esclient: Client;

    constructor() {
        this.esclient = new Client({
            node: 'http://localhost:9200', // replace with your cluster endpoint
        });
         
    }


  async getInventory(sku: string, location:string): Promise<InventoryResponse> { 
 
    const body = {
        size: 200,
        from: 0,
        query: {
            match: {
                id: sku,
            },
        },
    };
    let response = new  Array<InventoryResponse>();
    return  this.esclient.search({index: 'inventory', body: body})
        .then((results:ApiResponse) => {
            console.log('getInventory:  '+ sku + ' :response :'+ JSON.stringify(results.body.hits.hits));

            results.body.hits.hits.forEach(
                (hit, index) => { 
                    let inventory = new InventoryResponse();
                    inventory={...hit._source};
                    response.push(inventory);
                }
              );
            return response[0];
        })
        .catch(err => { throw new HttpException(err, 500); });
 
  }

}
