export interface CheckoutQuoteDays {
    max?: number;
    min?: number;
}
export interface CheckoutQuoteShipping {
    available: boolean;
    amount: number;
    method?: string;
    deliveryDays?: CheckoutQuoteDays;
    handlingDays?: number;
    transitDays?: CheckoutQuoteDays;
    issue?: string;
}
export interface CheckoutQuoteItem {
    product: string;
    variant: string;
    quantity: number;
    unitPrice: number;
    total: number;
    shipping: CheckoutQuoteShipping;
}
export interface CheckoutQuote {
    currency: string;
    available: boolean;
    issues: string[];
    items: CheckoutQuoteItem[];
    subtotal: number;
    shipping: number;
    total: number;
}
