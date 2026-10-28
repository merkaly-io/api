import type { SupplierProviderEnum } from '../supplier/provider.enum';
import type { AssetType } from '../../assets/asset/asset.enum';
export interface SupplierAssetPreview {
    type: AssetType;
    url: string;
}
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
    assets: SupplierAssetPreview[];
    currency: string;
    deliveryDays?: number;
    store?: {
        name: string;
        rating?: string;
    };
    variants: SupplierVariantPreview[];
    importedProduct?: string;
}
