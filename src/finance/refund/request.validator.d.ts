import { FinanceRefundReasonEnum, FinanceRefundStatusEnum } from 'src/domain/finance/enums/refund.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { FinanceRefundEntity } from 'src/domain/finance/entities/refund.entity';
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
