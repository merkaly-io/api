import { AbstractEntity, MongoEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { StatusEntity } from 'src/infrastructure/plugins/status.plugin';
import { ITransitionable } from 'src/infrastructure/types/transitionable.interface';
import { FinanceRefundReasonEnum, FinanceRefundStatusEnum } from '../enums/refund.enum';
import type { FinancePaymentEntity } from './payment.entity';
export declare class FinanceRefundEntity extends AbstractEntity implements ITransitionable<FinanceRefundStatusEnum> {
    payment: MongoEntity<FinancePaymentEntity>;
    amount: number;
    status: FinanceRefundStatusEnum;
    reason: FinanceRefundReasonEnum;
    notes?: string;
    history: StatusEntity<FinanceRefundStatusEnum>[];
    readonly number: string;
}
