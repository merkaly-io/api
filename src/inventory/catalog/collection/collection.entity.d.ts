import { AbstractEntity } from '../../../abstract.entity';
import { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogCollectionEntity extends AbstractEntity {
    name: string;
    description?: string;
    products: CatalogProductEntity[];
}
