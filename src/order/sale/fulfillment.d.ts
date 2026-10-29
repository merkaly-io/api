import type { FinancePaymentStatusEnum } from '../../finance/payment/payment.enum';
import type { OrderFulfillmentActionEnum, OrderFulfillmentStageEnum, OrderSaleCostSourceEnum, OrderSaleHistoryEventEnum } from './fulfillment.enum';
import type { OrderSupplierOrderStatusEnum } from '../purchase/supplier.order.enum';
export interface OrderSaleCosts {
    products: number;
    freight: number;
    total: number;
}
export interface OrderSaleEstimate extends OrderSaleCosts {
    profit: number;
    margin: number | null;
}
export interface OrderSaleItemSummary {
    item: string;
    variant: string | null;
    quantity: number;
    unitPrice: number;
    unitCost: number;
    total: number;
    cost: number;
    profit: number;
}
export interface OrderSaleHistoryEntry {
    at: string;
    type: OrderSaleHistoryEventEnum;
    purchase?: string;
    status?: OrderSupplierOrderStatusEnum;
}
export interface OrderSaleSummary {
    currency: string;
    revenue: {
        subtotal: number;
        shipping: number;
        total: number;
    };
    costs: OrderSaleCosts & {
        source: OrderSaleCostSourceEnum;
    };
    profit: number;
    margin: number | null;
    estimate: OrderSaleEstimate;
    variance: number | null;
    items: OrderSaleItemSummary[];
    history: OrderSaleHistoryEntry[];
    warnings: string[];
    payment: {
        status: FinancePaymentStatusEnum | null;
    };
    fulfillment: {
        stage: OrderFulfillmentStageEnum;
    };
    nextActions: OrderFulfillmentActionEnum[];
}
export interface OrderBuyerFulfillment {
    stage: OrderFulfillmentStageEnum;
    trackingNumbers: string[];
    carrier?: string;
    trackingUrl?: string;
}
