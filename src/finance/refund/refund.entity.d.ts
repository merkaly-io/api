import { AbstractEntity, MongoEntity } from '../../abstract.entity';
import { StatusEntity } from '../../status.plugin';
import { ITransitionable } from '../../transitionable.interface';
import { FinanceRefundReasonEnum, FinanceRefundStatusEnum } from './refund.enum';
import type { FinancePaymentEntity } from '../payment/payment.entity';
export declare class FinanceRefundEntity extends AbstractEntity implements ITransitionable<FinanceRefundStatusEnum> {
    payment: MongoEntity<FinancePaymentEntity>;
    amount: number;
    status: FinanceRefundStatusEnum;
    reason: FinanceRefundReasonEnum;
    notes?: string;
    history: StatusEntity<FinanceRefundStatusEnum>[];
    readonly number: string;
}
