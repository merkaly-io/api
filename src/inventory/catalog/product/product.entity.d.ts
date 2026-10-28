import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
import type { ContactVendorEntity } from '../../../contact/vendor/vendor.entity';
import type { IntegrationSupplierEntity } from '../../../integration/supplier/supplier.entity';
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    active: boolean;
    supplier?: IntegrationSupplierEntity;
    vendor?: ContactVendorEntity;
    externalProductId?: string;
    variant: CatalogVariantEntity;
    readonly supplierPrice: number;
    readonly retailPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    hashtags: string[];
    readonly picture: AssetEntity;
    readonly assets: AssetEntity[];
    readonly options: {
        name: string;
        values: string[];
    }[];
    readonly variants: CatalogVariantEntity[];
}
