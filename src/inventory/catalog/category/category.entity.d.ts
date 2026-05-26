import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { CatalogRelationStatusEnum } from '../enums/relation.status.enum';
import { CatalogProductEntity } from './product.entity';
export declare class CatalogCategoryEntity extends AbstractEntity {
    name: string;
    description?: string;
    parent?: CatalogCategoryEntity;
    readonly children?: CatalogCategoryEntity[];
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
