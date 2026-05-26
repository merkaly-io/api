import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { CatalogRelationStatusEnum } from '../enums/relation.status.enum';
import { CatalogProductEntity } from './product.entity';
export declare class CatalogBrandEntity extends AbstractEntity {
    name: string;
    description: string;
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
