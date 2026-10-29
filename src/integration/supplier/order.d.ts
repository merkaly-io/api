import type { OrderSupplierOrderStatusEnum } from '../../order/purchase/supplier.order.enum';
export interface SupplierOrderLine {
    externalProductId: string;
    externalVariantId: string;
    quantity: number;
}
export interface SupplierOrderRecipient {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export interface SupplierOrderAddress {
    postalCode: string;
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
    status: OrderSupplierOrderStatusEnum;
    warning?: string;
}
export interface SupplierOrderSnapshot {
    status?: OrderSupplierOrderStatusEnum;
    rawStatus: string;
    trackingNumbers: string[];
    carrier?: string;
    trackingUrl?: string;
}
