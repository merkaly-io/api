import { FinancePaymentMethodEnum, FinancePaymentStatusEnum, FinancePaymentTypeEnum } from './payment.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import type { FinancePaymentEntity } from './payment.entity';
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
