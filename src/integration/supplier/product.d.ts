import type { SupplierProviderEnum } from './provider.enum';
import type { AssetType } from '../../assets/asset/asset.enum';
export interface SupplierProductAsset {
    type: AssetType;
    url: string;
}
export interface SupplierProductOption {
    name: string;
    value: string;
    label?: string;
    externalNameId: string;
    externalValueId: string;
}
export interface SupplierProductProperty {
    name: string;
    value: string;
    unit?: string;
}
export interface SupplierProductVariant {
    externalVariantId: string;
    name: string;
    options: SupplierProductOption[];
    shipsFrom?: SupplierProductOption;
    supplierPrice: number;
    stock: number;
    picture?: string;
}
export interface SupplierProductShipping {
    country: string;
    amount: number;
    currency: string;
    service?: string;
    deliveryDays?: {
        min?: number;
        max?: number;
    };
}
export interface SupplierProduct {
    provider: SupplierProviderEnum;
    externalProductId: string;
    name: string;
    description: string;
    assets: SupplierProductAsset[];
    currency: string;
    handlingDays?: number | null;
    deliveryDays?: number | null;
    properties: SupplierProductProperty[];
    ratingValue: number | null;
    ratingCount: number | null;
    soldCount: number | null;
    store?: {
        externalId: string;
        name: string;
        rating?: string;
    };
    variants: SupplierProductVariant[];
    importedProduct?: string;
    defaultMarkup?: number;
    shipping?: SupplierProductShipping | null;
}
export interface SupplierProductSource {
    product: SupplierProduct;
    offers: SupplierProductVariant[];
}
