import type { OrderPurchaseStatusEnum } from '../purchase/purchase.enum';
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
    status?: OrderPurchaseStatusEnum;
    received: boolean;
    rawStatus: string;
    trackingNumbers: string[];
    currency: string;
    total: number;
    lines: SaleImportPreviewLine[];
    issues: string[];
}
