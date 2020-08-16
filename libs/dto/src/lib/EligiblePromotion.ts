/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/* prettier-ignore */
import {PromotionRule} from './PromotionRule';

export  class EligiblePromotion {
    order?:Array<PromotionRule>;
    item?: Array<PromotionRule>;
    shipping?: Array<PromotionRule>; 
}
