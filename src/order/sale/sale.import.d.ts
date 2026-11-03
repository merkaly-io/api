import type { OrderSupplierOrderStatusEnum } from '../purchase/supplier.order.enum';
export interface SaleImportPreviewLine {
    externalProductId: string;
    externalVariantId: string;
    name: string;
    options: {
        name: string;
        value: string;
    }[];
    picture?: string;
    quantity: number;
    paid: number;
    inCatalog: boolean;
    issue?: string;
}
export interface SaleImportPreview {
    externalOrderId: string;
    store?: string;
    placedAt: Date;
    status?: OrderSupplierOrderStatusEnum;
    rawStatus: string;
    trackingNumbers: string[];
    currency: string;
    total: number;
    lines: SaleImportPreviewLine[];
    issues: string[];
}
