import type { SupplierProviderEnum } from '../source/provider.enum';
export interface SupplierVariantPreview {
    externalVariantId: string;
    name: string;
    supplierPrice: number;
    stock: number;
    picture?: string;
}
export interface SupplierProductPreview {
    provider: SupplierProviderEnum;
    externalProductId: string;
    name: string;
    description: string;
    pictures: string[];
    currency: string;
    deliveryDays?: number;
    store?: {
        name: string;
        rating?: string;
    };
    variants: SupplierVariantPreview[];
    importedProduct?: string;
}
