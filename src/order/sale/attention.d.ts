import type { OrderSaleAttentionEnum } from './attention.enum';
import type { OrderFulfillmentStageEnum } from './fulfillment.enum';
export interface OrderSaleAttentionSummary {
    attention: Record<OrderSaleAttentionEnum, number>;
    stages: Record<OrderFulfillmentStageEnum, number>;
    shipmentDelayDays: number;
}
