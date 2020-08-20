import { Controller, Get, Post, Body } from '@nestjs/common';

import { AppService } from './app.service';
import { CalculateService} from './calculate.service';
import { PromotionService} from './client/promotion.service'; 
import { ShippingService} from './client/shipping.service'; 
import { SkuService} from './client/sku.service'; 
import { CartResponse,Promotion,  PromotionRuleConfig ,ChargeResponse } from '@omni-app/dto'; 

@Controller()
export class AppController {
  constructor(private readonly appService: AppService
    , private readonly calculateService: CalculateService
    , private readonly skuService: SkuService
    , private readonly shippingService: ShippingService
    , private readonly promotionService: PromotionService) {}


  // @Get()
  // getData() {
  //   return this.appService.getData();
  // }

  @Post()
  async calculatePromotion(@Body() cart:CartResponse){
    console.log('Cart : '+ cart);


    cart.appliedPromotions= new Array<Promotion>();
    cart.promotions       = new Map<string,PromotionRuleConfig> ();
    cart.charge           = new ChargeResponse();
    cart.charge.total     = 0;
    cart.charge.shipping  = 0;
    cart.charge.skucharge = 0;
    cart.charge.discount  = 0;
    cart.charge.tax       = 0;


    cart.items.filter(function(item) {
      item.charge             = new ChargeResponse(); 
      item.charge.discount    = 0;
      item.charge.shipping    = 0;
      item.charge.skucharge   = 0; 
      item.charge.total       = 0;
      item.charge.tax         = 0;
    }); 
    
    await this.skuService.getSKUPrice(cart);
    await this.shippingService.getShippingCharge(cart);

    cart.items.filter(function(item) { 
      item.charge.skucharge   = (item.quantity * item.unitprice) ;  
      item.charge.total       = item.charge.skucharge  ;
      cart.charge.skucharge   = (cart.charge.skucharge + item.charge.total );
    }); 

    let applicablePromos    =  await this.promotionService.getEligiblePromotions(cart);


    this.calculateService.calculatePromotion(cart , applicablePromos);


    cart.items.filter(function(item) {  
      item.charge.total       =  Number(item.charge.total.toFixed(2))
      item.charge.discount    =  Number(item.charge.discount.toFixed(2))
      item.charge.shipping    =  Number(item.charge.shipping.toFixed(2))
      item.charge.skucharge   =  Number(item.charge.skucharge.toFixed(2))
      item.charge.tax         =  Number(item.charge.tax.toFixed(2))
    });

    cart.items.filter(function(item) { 
        item.charge.total       = item.charge.skucharge - item.charge.discount ;
        cart.charge.discount    = cart.charge.discount + item.charge.discount;
    }); 
    cart.charge.total = cart.charge.skucharge - cart.charge.discount + cart.charge.shipping;


    cart.charge.total       =  Number(cart.charge.total.toFixed(2))
    cart.charge.shipping    =  Number(cart.charge.shipping.toFixed(2))
    cart.charge.skucharge   =  Number(cart.charge.skucharge.toFixed(2))
    cart.charge.discount    =  Number(cart.charge.discount.toFixed(2))
    cart.charge.tax         =  Number(cart.charge.tax.toFixed(2))


    console.log("--final orders---");
    console.log(cart);
    console.log("--------");
    return cart;
  }
}
