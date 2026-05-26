import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { CatalogProductEntity } from './product.entity';
export declare class CatalogCollectionEntity extends AbstractEntity {
    name: string;
    description?: string;
    products: CatalogProductEntity[];
}
