import type { SupplierProviderEnum } from '../../integration/supplier/provider.enum';
import type { SupplierQuote } from '../../integration/supplier/quote';
export interface ProcurementLine {
    item: string;
    product: {
        id: string;
        name: string;
    };
    variant: string;
    quantity: number;
    retailUnit: number;
    storedUnitCost: number;
    quotedUnitCost?: number;
    freight?: number;
    quote?: SupplierQuote;
}
export interface ProcurementGroup {
    supplier: {
        id: string;
        provider: SupplierProviderEnum;
    };
    vendor: {
        id: string;
        name: string;
    } | null;
    items: ProcurementLine[];
    totals: {
        retail: number;
        shipping: number;
        cost: number;
        freight: number;
        margin: number;
    };
    available: boolean;
    marginOk: boolean;
}
export interface ProcurementQuote {
    sale: string;
    currency: string;
    destination: {
        country: string;
        source: 'order' | 'market';
    };
    groups: ProcurementGroup[];
    manual: ProcurementLine[];
}
