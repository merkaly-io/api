import { AbstractEntity } from '../../abstract.entity';
import { FinanceRefundOriginEnum } from './refund.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
export declare class FinanceRefundEntity extends AbstractEntity {
    payment: FinancePaymentEntity | string;
    amount: number;
    partial: boolean;
    origin: FinanceRefundOriginEnum;
    provider?: string | null;
    reference?: string | null;
    status: string;
    at: Date;
}
