import { FinancePaymentMethodEnum } from '../../finance/payment/payment.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
export declare class ConfirmSalePaymentRequestValidator extends AbstractRequestValidator {
    method: FinancePaymentMethodEnum;
}
