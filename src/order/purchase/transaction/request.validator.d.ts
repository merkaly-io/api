import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from 'src/domain/finance/enums/payment.enum';
import { PurchaseTransactionStatusEnum } from 'src/domain/order/purchase/enums/transaction.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import { PurchaseItemRequestValidator } from '../item/request.validator';
import type { PurchaseTransactionEntity } from '../../entities/transaction.entity';
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
