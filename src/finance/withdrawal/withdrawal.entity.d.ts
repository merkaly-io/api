import { AccountUserEntity } from '../../account/user/user.entity';
import { PaymentPixKeyTypeEnum } from '../../integration/payment/account.enum';
import { AbstractEntity } from '../../abstract.entity';
import { FinanceWithdrawalStatusEnum } from './withdrawal.enum';
export declare class FinanceWithdrawalEntity extends AbstractEntity {
    amount: number;
    fee: number;
    readonly netAmount: number;
    keyType?: PaymentPixKeyTypeEnum | null;
    keyMasked?: string | null;
    status: FinanceWithdrawalStatusEnum;
    rawStatus: string;
    failReason?: string | null;
    requestedBy?: AccountUserEntity | string | null;
    completedAt?: Date | null;
    transferId: string;
    receiptUrl?: string | null;
}
