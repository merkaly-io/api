import { TransferStatusEnum } from './transfer.enum';
import { AbstractRequestValidator } from '../../../abstract.validator';
import type { StockTransferEntity } from './transfer.entity';
import type { StockTransferItemEntity } from './transfer.item.entity';
export declare class StockTransferItemRequestValidator extends AbstractRequestValidator {
    product: string;
    variant: string;
    quantity: number;
    notes?: string;
    constructor(item?: StockTransferItemEntity);
}
export declare class CreateStockTransferRequestValidator extends AbstractRequestValidator {
    origin?: string;
    destination?: string;
    items: StockTransferItemRequestValidator[];
    notes?: string;
    status?: TransferStatusEnum;
    constructor(transfer?: StockTransferEntity);
}
export declare class UpdateStockTransferRequestValidator extends CreateStockTransferRequestValidator {
    origin: string;
    destination: string;
    items: StockTransferItemRequestValidator[];
}
