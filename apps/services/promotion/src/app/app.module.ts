import { Module } from '@nestjs/common';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateService} from './calculate.service';
import { PromotionService} from './client/promotion.service'; 
import { ShippingService} from './client/shipping.service'; 
import { SkuService} from './client/sku.service'; 

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService,PromotionService,ShippingService,SkuService,CalculateService],
})
export class AppModule {}
