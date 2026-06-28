import { AccountUserEntity } from './account/user/user.entity';
import { FinancePaymentEntity } from './finance/payment/payment.entity';
import { StockWarehouseEntity } from './inventory/stock/warehouse/warehouse.entity';
import { AbstractEntity } from './abstract.entity';
import { StatusEntity } from './status.plugin';
import { ITransitionable } from './transitionable.interface';
import { ItemEntity } from './order/sale/item/item.entity';
export interface TransactionCapabilities {
    addItems: boolean;
    editItems: boolean;
    deleteItems: boolean;
}
export declare class TransactionEntity<S extends string> extends AbstractEntity implements ITransitionable<S> {
    user: AccountUserEntity;
    warehouse: StockWarehouseEntity;
    notes?: string;
    status: S;
    items: ItemEntity[];
    readonly warehouses: Record<string, ItemEntity[]>;
    readonly number: string;
    readonly pricing: {
        subtotal: number;
        total: number;
        units: number;
    };
    readonly payment: FinancePaymentEntity;
    readonly isProcessable: boolean;
    readonly capabilities: TransactionCapabilities;
    readonly history: StatusEntity<S>[];
}
