import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from '../../finance/payment/payment.enum';
import { OrderPurchaseStatusEnum } from './purchase.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import { PurchaseItemRequestValidator } from './item.request.validator';
import type { OrderPurchaseEntity } from './purchase.entity';
export declare class CreatePurchaseRequestValidator extends AbstractRequestValidator {
    items: PurchaseItemRequestValidator[];
    method: FinancePaymentMethodEnum;
    notes?: string;
    vendor?: string;
    customerOrder?: string;
    payment: FinancePaymentStatusEnum;
    status?: OrderPurchaseStatusEnum;
    constructor(order?: OrderPurchaseEntity);
    get total(): {
        units: number;
        price: number;
    };
}
export declare class UpdatePurchaseRequestValidator extends CreatePurchaseRequestValidator {
    items: PurchaseItemRequestValidator[];
    method: FinancePaymentMethodEnum;
}
