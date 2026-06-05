import { AbstractEntity } from '../../../abstract.entity';
import { CatalogRelationStatusEnum } from '../../../relation.status.enum';
import { CatalogProductEntity } from '../product/product.entity';
export declare class CatalogBrandEntity extends AbstractEntity {
    name: string;
    description: string;
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
