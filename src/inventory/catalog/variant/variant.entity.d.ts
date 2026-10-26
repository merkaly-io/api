import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    product?: CatalogProductEntity;
    sellPrice: number;
    active: boolean;
    pictures: AssetEntity[];
    readonly picture: AssetEntity;
    readonly total: number;
}
