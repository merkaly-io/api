import { AccountUserEntity } from '../../../account/user/user.entity';
import { StockWarehouseEntity } from '../warehouse/warehouse.entity';
import { TransferStatusEnum } from './transfer.enum';
import { AbstractEntity } from '../../../abstract.entity';
import { StockTransferItemEntity } from './transfer.item.entity';
import type { StatusEntity } from '../../../status.plugin';
export interface StockTransferCapabilities {
    addItems: boolean;
    cancel: boolean;
    complete: boolean;
    deleteItems: boolean;
    editItems: boolean;
}
export declare class StockTransferEntity extends AbstractEntity {
    origin: StockWarehouseEntity;
    destination: StockWarehouseEntity;
    items: StockTransferItemEntity[];
    notes?: string;
    user: AccountUserEntity;
    history: StatusEntity<TransferStatusEnum>[];
    status: TransferStatusEnum;
    readonly number: string;
    readonly capabilities: StockTransferCapabilities;
    readonly isProcessable: boolean;
}
