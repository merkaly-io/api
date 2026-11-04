import { OrderBuyerStageEnum } from './fulfillment.enum';
import { SearchValidator } from '../../abstract.validator';
import type { OrderSaleEntity } from './sale.entity';
export declare class SearchBuyerOrdersRequestValidator extends SearchValidator<OrderSaleEntity> {
    stage?: OrderBuyerStageEnum;
}
