import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
import type { SupplierProviderEnum } from '../../../supplier/product/provider.enum';
export interface CatalogProductSource {
    provider: SupplierProviderEnum;
    productId: string;
}
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    source?: CatalogProductSource;
    variant: CatalogVariantEntity;
    readonly supplierPrice: number;
    readonly retailPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    hashtags: string[];
    readonly picture: AssetEntity;
    readonly pictures: AssetEntity[];
    readonly variants: CatalogVariantEntity[];
}
