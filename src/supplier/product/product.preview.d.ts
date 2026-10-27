import type { SupplierProviderEnum } from './provider.enum';
export interface SupplierVariantPreview {
    skuId: string;
    skuAttr: string;
    supplierPrice: number;
    stock: number;
    picture?: string;
}
export interface SupplierProductPreview {
    provider: SupplierProviderEnum;
    productId: string;
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
