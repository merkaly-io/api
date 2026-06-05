import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from '../../../finance/payment/payment.enum';
import { PurchaseTransactionStatusEnum } from './transaction.enum';
import { AbstractRequestValidator } from '../../../abstract.validator';
import { PurchaseItemRequestValidator } from '../item/request.validator';
import type { PurchaseTransactionEntity } from './transaction.entity';
export declare class CreatePurchaseTransactionRequestValidator extends AbstractRequestValidator {
    items: PurchaseItemRequestValidator[];
    method: FinancePaymentMethodEnum;
    notes?: string;
    vendor?: string;
    warehouse?: string;
    payment: FinancePaymentStatusEnum;
    status?: PurchaseTransactionStatusEnum;
    constructor(order?: PurchaseTransactionEntity);
    get total(): {
        units: number;
        price: number;
    };
}
export declare class UpdatePurchaseTransactionRequestValidator extends CreatePurchaseTransactionRequestValidator {
    items: PurchaseItemRequestValidator[];
    method: FinancePaymentMethodEnum;
}
