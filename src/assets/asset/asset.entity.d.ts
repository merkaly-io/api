import { AssetType } from './asset.enum';
import { AbstractEntity } from '../../abstract.entity';
export declare class AssetEntity extends AbstractEntity {
    name: string;
    url: string;
    alt?: string;
    weak: boolean;
    type: AssetType;
    size: number;
}
