import { AccountUserEntity } from 'src/domain/account/entities/user.entity';
import { FinancePaymentEntity } from 'src/domain/finance/entities/payment.entity';
import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { StatusEntity } from '../plugins/status.plugin';
import { ITransitionable } from '../types/transitionable.interface';
import { ItemEntity } from './item.entity';
export declare class TransactionEntity<S extends string> extends AbstractEntity implements ITransitionable<S> {
    user: AccountUserEntity;
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
    readonly history: StatusEntity<S>[];
}
