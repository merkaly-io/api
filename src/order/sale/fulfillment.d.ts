import type { FinancePaymentStatusEnum } from '../../finance/payment/payment.enum';
import type { LogisticsShipmentEntity } from '../../logistics/shipment/shipment.entity';
import type { LogisticsBuyerShipment } from '../../logistics/shipment/shipment';
import type { OrderFulfillmentActionEnum, OrderSaleCostSourceEnum, OrderSaleHistoryEventEnum } from './fulfillment.enum';
import type { OrderPurchaseStatusEnum } from '../purchase/purchase.enum';
import type { OrderSaleStatusEnum } from './sale.enum';
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
    status?: OrderPurchaseStatusEnum;
    trackingNumber?: string;
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
    status: OrderSaleStatusEnum;
    shipments: LogisticsShipmentEntity[];
    nextActions: OrderFulfillmentActionEnum[];
    cancellable: boolean;
}
export interface OrderBuyerFulfillment {
    status: OrderSaleStatusEnum;
    shipments: LogisticsBuyerShipment[];
    orderedAt: Date | null;
}
