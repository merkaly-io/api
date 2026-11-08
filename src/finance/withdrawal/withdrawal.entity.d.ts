import { AccountUserEntity } from '../../account/user/user.entity';
import { PaymentPixKeyTypeEnum } from '../../integration/payment/account.enum';
import { AbstractEntity } from '../../abstract.entity';
import { FinanceWithdrawalStatusEnum } from './withdrawal.enum';
export declare class FinanceWithdrawalEntity extends AbstractEntity {
    amount: number;
    fee?: number | null;
    netAmount?: number | null;
    pixKeyType?: PaymentPixKeyTypeEnum | null;
    pixKeyMasked?: string | null;
    status: FinanceWithdrawalStatusEnum;
    rawStatus: string;
    failReason?: string | null;
    authorized?: boolean | null;
    requestedBy?: AccountUserEntity | string | null;
    requestedAt: Date;
    completedAt?: Date | null;
    provider: string;
    reference: string;
    receiptUrl?: string | null;
}
