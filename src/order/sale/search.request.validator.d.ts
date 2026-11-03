import { OrderBuyerStageEnum } from './fulfillment.enum';
import { SearchValidator, type SearchRules } from '../../abstract.validator';
import type { OrderSaleEntity } from './sale.entity';
export declare class SearchBuyerOrdersRequestValidator extends SearchValidator<OrderSaleEntity> {
    static readonly rules: SearchRules;
    stage?: OrderBuyerStageEnum;
}
