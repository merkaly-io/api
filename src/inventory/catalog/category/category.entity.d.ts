import { AbstractEntity } from '../../../abstract.entity';
import { CatalogRelationStatusEnum } from '../../../relation.status.enum';
import { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogCategoryEntity extends AbstractEntity {
    name: string;
    description?: string;
    parent?: CatalogCategoryEntity;
    readonly children?: CatalogCategoryEntity[];
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
