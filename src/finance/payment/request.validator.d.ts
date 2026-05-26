import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from 'src/domain/finance/enums/payment.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { FinancePaymentEntity } from 'src/domain/finance/entities/payment.entity';
export declare class CreateFinancePaymentRequestValidator extends AbstractRequestValidator {
    type: FinancePaymentTypeEnum;
    order?: string;
    method?: FinancePaymentMethodEnum;
    total?: number;
    status?: FinancePaymentStatusEnum;
    constructor(payment?: FinancePaymentEntity);
}
export declare class UpdateFinancePaymentRequestValidator extends CreateFinancePaymentRequestValidator {
    type: FinancePaymentTypeEnum;
}
