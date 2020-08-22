import { Injectable ,HttpException} from '@nestjs/common';
import * as elasticsearch from 'elasticsearch';

@Injectable()
export class AppService {

  private readonly esclient: elasticsearch.Client;

    constructor() {
        this.esclient = new elasticsearch.Client({
            host: 'http://localhost:9200', // replace with your cluster endpoint
        });

        this.esclient.ping({ requestTimeout: 3000 })
        .catch(err => { 
            throw new HttpException({
                status: 'error',
                message: 'Unable to reach Elasticsearch cluster'
             }, 500); 
         });
    }
  getData(): { message: string } {
    return { message: 'Welcome to inventory!' };
  }
}
