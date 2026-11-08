import { AbstractEntity } from "../../abstract.entity";
import { FinanceChargebackReasonEnum, FinanceChargebackStatusEnum } from './chargeback.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
export declare class FinanceChargebackEntity extends AbstractEntity {
    payment: FinancePaymentEntity | string;
    status: FinanceChargebackStatusEnum;
    reason?: FinanceChargebackReasonEnum | null;
    rawReason?: string | null;
    openedAt: Date;
    respondBy?: Date | null;
    resolvedAt?: Date | null;
    amount: number;
    provider: string;
    reference?: string | null;
    chargebackId?: string | null;
    rawStatus: string;
}
