import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import { CatalogAttributeEntity } from '../attribute/attribute.entity';
import type { CatalogBrandEntity } from '../brand/brand.entity';
import type { CatalogCategoryEntity } from '../category/category.entity';
import type { CatalogVariantEntity } from '../variant/variant.entity';
export declare class CatalogProductEntity extends AbstractEntity {
    sku?: string;
    name: string;
    description?: string;
    price: number;
    sellPrice: number;
    cost: number;
    buyPrice: number;
    category?: CatalogCategoryEntity;
    brand?: CatalogBrandEntity;
    attributes: {
        type: CatalogAttributeEntity;
        values: string[];
    }[];
    hashtags: string[];
    readonly picture: AssetEntity;
    readonly pictures: AssetEntity[];
    readonly variants: CatalogVariantEntity[];
}
