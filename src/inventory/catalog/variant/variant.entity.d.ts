import { AssetEntity } from '../../../assets/asset/asset.entity';
import { AbstractEntity } from '../../../abstract.entity';
import { VariantIdentifierEntity } from './variant.identifier.entity';
import type { CatalogAttributeEntity } from '../attribute/attribute.entity';
import type { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogVariantEntity extends AbstractEntity {
    product?: CatalogProductEntity;
    price: number;
    identifier: VariantIdentifierEntity;
    options: {
        type: CatalogAttributeEntity;
        value: string;
    }[];
    active: boolean;
    pictures: AssetEntity[];
    readonly picture: AssetEntity;
    readonly total: number;
}
