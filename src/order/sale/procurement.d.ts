import type { SupplierProviderEnum } from "../../integration/supplier/provider.enum";
import type { SupplierQuote } from "../../integration/supplier/quote";
export interface ProcurementLine {
    item: string;
    product: {
        id: string;
        name: string;
    };
    variant: string;
    vendor: {
        id: string;
        name: string;
    };
    quantity: number;
    retailUnit: number;
    storedUnitCost: number;
    quotedUnitCost?: number;
    shippingCost?: number;
    taxCost?: number;
    quote?: SupplierQuote;
}
export interface ProcurementGroup {
    supplier: {
        id: string;
        provider: SupplierProviderEnum;
    };
    vendors: {
        id: string;
        name: string;
    }[];
    items: ProcurementLine[];
    totals: {
        retail: number;
        shippingPrice: number;
        taxPrice: number;
        cost: number;
        shippingCost: number;
        taxCost: number;
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
}
