import { Injectable ,HttpException } from '@nestjs/common';
import { ProductResponse } from '@omni-app/dto';
 
import { Client, ApiResponse, RequestParams } from '@elastic/elasticsearch'

@Injectable()
export class ProductService {
    private readonly esclient: Client;

    constructor() {
        this.esclient = new Client({
            node: 'http://localhost:9200', // replace with your cluster endpoint
        });
         
    }


  async getProduct(sku: string): Promise<ProductResponse> {

    // return new ProductResponse();
    const body = {
        size: 200,
        from: 0,
        query: {
            match: {
                id: sku,
            },
        },
    };
    let response = new  Array<ProductResponse>();
    return  this.esclient.search({index: 'product', body: body})
        .then((results:ApiResponse) => {
            console.log('getProduct:  '+ sku + ' :response :'+ JSON.stringify(results.body.hits.hits));

            results.body.hits.hits.forEach(
                (hit, index) => { 
                    let product = new ProductResponse();
                    product={...hit._source};
                    response.push(product);
                }
              );
            return response[0];
        })
        .catch(err => { throw new HttpException(err, 500); });
 
  }

}
