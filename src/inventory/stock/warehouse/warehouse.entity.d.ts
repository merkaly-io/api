import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { SaveEntityArgs } from 'src/infrastructure/abstracts/abstract.repository';
import { AddressEntity } from 'src/infrastructure/entities/address.entity';
export declare class StockWarehouseEntity extends AbstractEntity {
    name: string;
    code: string;
    description: string;
    address: SaveEntityArgs<AddressEntity>;
    isDefault: boolean;
    active: boolean;
}
