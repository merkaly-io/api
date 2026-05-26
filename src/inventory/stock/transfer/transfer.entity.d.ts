import { AccountUserEntity } from 'src/domain/account/entities/user.entity';
import { StockWarehouseEntity } from 'src/domain/inventory/stock/entities/warehouse.entity';
import { TransferStatusEnum, TransferTypeEnum } from 'src/domain/inventory/stock/enums/transfer.enum';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { StockTransferItemEntity } from './transfer.item.entity';
import type { StatusEntity } from 'src/infrastructure/plugins/status.plugin';
export declare class StockTransferEntity extends AbstractEntity {
    origin: StockWarehouseEntity;
    destination: StockWarehouseEntity;
    items: StockTransferItemEntity[];
    notes?: string;
    user: AccountUserEntity;
    history: StatusEntity<TransferStatusEnum>[];
    status: TransferStatusEnum;
    readonly type: TransferTypeEnum;
    readonly number: string;
    readonly isProcessable: boolean;
}
