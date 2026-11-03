import { AbstractEntity } from '../../../abstract.entity';
import { CatalogRelationStatusEnum } from '../../../relation.status.enum';
import { CatalogProductEntity } from '../product/product.entity';
import type { AssetEntity } from '../../../assets/asset/asset.entity';
export declare class CatalogCategoryEntity extends AbstractEntity {
    name: string;
    description?: string;
    icon?: string | null;
    parent?: CatalogCategoryEntity;
    posterId?: string | null;
    readonly poster?: AssetEntity | null;
    readonly children?: CatalogCategoryEntity[];
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
