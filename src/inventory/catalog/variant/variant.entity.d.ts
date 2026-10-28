import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import { CatalogVariantOptionEntity } from './variant.option.entity';
import type { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    product: CatalogProductEntity;
    supplierPrice: number;
    retailPrice: number;
    active: boolean;
    picture?: AssetEntity;
    assets: AssetEntity[];
    options: CatalogVariantOptionEntity[];
    shipsFrom?: CatalogVariantOptionEntity;
    externalVariantId?: string;
}
