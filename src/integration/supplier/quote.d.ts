export interface SupplierQuoteRequest {
    externalProductId: string;
    externalVariantId: string;
    quantity: number;
}
export interface SupplierImportTaxBracket {
    rate: number;
    upTo: number | null;
}
export interface SupplierQuote extends SupplierQuoteRequest {
    available: boolean;
    currency: string;
    issue?: string;
    stock?: number;
    unitCost?: number;
    freight?: number;
    freightCode?: string;
    freightService?: string;
    taxBrackets?: SupplierImportTaxBracket[];
    deliveryDays?: {
        max?: number;
        min?: number;
    };
}
