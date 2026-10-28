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
export interface SupplierProductVariant {
    externalVariantId: string;
    name: string;
    options: SupplierProductOption[];
    shipsFrom?: SupplierProductOption;
    supplierPrice: number;
    stock: number;
    picture?: string;
}
export interface SupplierProduct {
    provider: SupplierProviderEnum;
    externalProductId: string;
    name: string;
    description: string;
    assets: SupplierProductAsset[];
    currency: string;
    deliveryDays?: number;
    store?: {
        externalId: string;
        name: string;
        rating?: string;
    };
    variants: SupplierProductVariant[];
    importedProduct?: string;
}
