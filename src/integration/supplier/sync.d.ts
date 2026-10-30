import type { SupplierProductVariant } from './product';
import type { CatalogProductEntity } from '../../inventory/catalog/product/product.entity';
import type { CatalogVariantOptionEntity } from '../../inventory/catalog/variant/variant.option.entity';
export interface SupplierProductSyncCostChange {
    variant: string;
    externalVariantId: string;
    from: number;
    to: number;
}
export interface SupplierProductSyncMissingVariant {
    variant: string;
    externalVariantId: string;
    options: CatalogVariantOptionEntity[];
}
export interface SupplierProductSyncChanges {
    costChanged: SupplierProductSyncCostChange[];
    missingVariants: SupplierProductSyncMissingVariant[];
    newVariants: SupplierProductVariant[];
    fields: string[];
}
export interface SupplierProductSyncResult {
    product: CatalogProductEntity;
    changes: SupplierProductSyncChanges;
}
