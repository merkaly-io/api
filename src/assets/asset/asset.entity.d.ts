import { AssetType } from 'src/domain/assets/enums/asset.enum';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
export declare class AssetEntity extends AbstractEntity {
    name: string;
    url: string;
    alt?: string;
    weak: boolean;
    type: AssetType;
    size: number;
}
