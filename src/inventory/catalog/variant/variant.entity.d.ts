import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogProductEntity, CatalogProductSource } from '../product/product.entity';
export interface CatalogVariantSource extends CatalogProductSource {
    skuId: string;
    skuAttr: string;
}
export declare class CatalogVariantEntity extends AbstractEntity {
    product: CatalogProductEntity;
    supplierPrice: number;
    retailPrice: number;
    active: boolean;
    pictures: AssetEntity[];
    source?: CatalogVariantSource;
    readonly picture: AssetEntity;
}
