import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import type { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    product: CatalogProductEntity;
    supplierPrice: number;
    retailPrice: number;
    active: boolean;
    pictures: AssetEntity[];
    externalVariantId?: string;
    readonly picture: AssetEntity;
}
