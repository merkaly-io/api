import type { FinancePaymentStatusEnum } from '../../finance/payment/payment.enum';
import type { OrderFulfillmentActionEnum, OrderFulfillmentStageEnum } from './fulfillment.enum';
export interface OrderSaleSummary {
    currency: string;
    revenue: {
        subtotal: number;
        shipping: number;
        total: number;
    };
    costs: {
        products: number;
        freight: number;
        total: number;
    };
    profit: number;
    margin: number | null;
    payment: {
        status: FinancePaymentStatusEnum | null;
    };
    fulfillment: {
        stage: OrderFulfillmentStageEnum;
    };
    nextActions: OrderFulfillmentActionEnum[];
    supplierOrdering: {
        enabled: boolean;
    };
}
export interface OrderBuyerFulfillment {
    stage: OrderFulfillmentStageEnum;
    trackingNumbers: string[];
    carrier?: string;
    trackingUrl?: string;
}
