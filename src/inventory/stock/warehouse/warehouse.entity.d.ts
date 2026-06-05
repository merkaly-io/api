import { AbstractEntity } from '../../../abstract.entity';
import { SaveEntityArgs } from '../../../repository.types';
import { AddressEntity } from '../../../address.entity';
export declare class StockWarehouseEntity extends AbstractEntity {
    name: string;
    code: string;
    description: string;
    address: SaveEntityArgs<AddressEntity>;
    isDefault: boolean;
    active: boolean;
}
