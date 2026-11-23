import type { LogisticsParcelInput } from "../../logistics/shipment/shipment";
import type { OrderPurchaseStatusEnum } from "../../order/purchase/purchase.enum";
export interface SupplierOrderLine {
    externalProductId: string;
    externalVariantId: string;
    quantity: number;
    logisticsService?: string;
}
export interface SupplierOrderRecipient {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export interface SupplierOrderAddress {
    zipCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
}
export interface SupplierOrderRequest {
    reference: string;
    lines: SupplierOrderLine[];
    recipient: SupplierOrderRecipient;
    address: SupplierOrderAddress;
}
export interface SupplierOrderPlacement {
    externalOrderIds: string[];
    status: OrderPurchaseStatusEnum;
    warning?: string;
}
export interface SupplierOrderChargedLine {
    externalVariantId: string;
    quantity: number;
    paid: number;
    shipping: number;
    tax: number;
}
export interface SupplierOrderPart {
    externalOrderId: string;
    status?: OrderPurchaseStatusEnum;
    rawStatus: string;
    lines: SupplierOrderChargedLine[];
    charged: boolean;
}
export interface SupplierOrderParcel extends LogisticsParcelInput {
    externalOrderIds: string[];
}
export interface SupplierOrderSnapshot {
    status?: OrderPurchaseStatusEnum;
    received: boolean;
    rawStatus: string;
    orders: SupplierOrderPart[];
    parcels: SupplierOrderParcel[];
    payExpiryDate?: Date | null;
}
export interface SupplierOrderImportLine {
    externalProductId: string;
    externalVariantId: string;
    name: string;
    quantity: number;
    paid: number;
    shipping: number;
}
export interface SupplierOrderImport extends SupplierOrderSnapshot {
    externalOrderId: string;
    currency: string;
    lines: SupplierOrderImportLine[];
    placedAt: Date;
    store?: string;
    total: number;
}
