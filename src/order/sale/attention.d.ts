import type { OrderSaleAttentionEnum } from './attention.enum';
import type { OrderSaleStatusEnum } from './sale.enum';
export interface OrderSaleAttentionSummary {
    attention: Record<OrderSaleAttentionEnum, number>;
    statuses: Record<OrderSaleStatusEnum, number>;
    shipmentDelayDays: number;
    paymentConfirmDays: number;
}
