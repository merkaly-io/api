export interface SupplierQuoteRequest {
    externalProductId: string;
    externalVariantId: string;
    quantity: number;
}
export interface SupplierQuote extends SupplierQuoteRequest {
    available: boolean;
    currency: string;
    issue?: string;
    stock?: number;
    unitCost?: number;
    freight?: number;
    freightService?: string;
    deliveryDays?: {
        max?: number;
        min?: number;
    };
}
