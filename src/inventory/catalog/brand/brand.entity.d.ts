import { AbstractEntity } from '../../../abstract.entity';
import { CatalogRelationStatusEnum } from '../../../relation.status.enum';
import { CatalogProductEntity } from '../product/product.entity';
import type { AssetEntity } from '../../../assets/asset/asset.entity';
export declare class CatalogBrandEntity extends AbstractEntity {
    name: string;
    description: string;
    posterId?: string | null;
    readonly poster?: AssetEntity | null;
    readonly products?: CatalogProductEntity[];
    readonly status: CatalogRelationStatusEnum;
}
