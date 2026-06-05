import { FinanceRefundReasonEnum, FinanceRefundStatusEnum } from './refund.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import type { FinanceRefundEntity } from './refund.entity';
export declare class CreateFinanceRefundRequestValidator extends AbstractRequestValidator {
    payment: string;
    reason: FinanceRefundReasonEnum;
    amount: number;
    notes?: string;
    status?: FinanceRefundStatusEnum;
    constructor(refund?: FinanceRefundEntity);
}
export declare class UpdateFinanceRefundRequestValidator extends CreateFinanceRefundRequestValidator {
    payment: string;
    reason: FinanceRefundReasonEnum;
    amount: number;
}
