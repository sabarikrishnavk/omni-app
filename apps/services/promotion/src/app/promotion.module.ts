import { Module } from '@nestjs/common';

import { PromotionController } from './promotion.controller'; 
import { CalculateService} from './services/calculate.service';
import { PromotionService} from './services/promotion.service'; 
import { ShippingService} from './client/shipping.service'; 
import { SkuService} from './client/sku.service'; 

@Module({
  imports: [],
  controllers: [PromotionController],
  providers: [PromotionService,ShippingService,SkuService,CalculateService],
})
export class PromotionModule {}
