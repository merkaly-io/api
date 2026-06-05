import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from '../../../finance/payment/payment.enum';
import { SaleTransactionStatusEnum } from './transaction.enum';
import { AbstractRequestValidator } from '../../../abstract.validator';
import { SaleItemRequestValidator } from '../item/request.validator';
import type { SaleTransactionEntity } from './transaction.entity';
export declare class CreateSaleTransactionRequestValidator extends AbstractRequestValidator {
    items: SaleItemRequestValidator[];
    method: FinancePaymentMethodEnum;
    notes?: string;
    customer?: string;
    warehouse?: string;
    payment: FinancePaymentStatusEnum;
    status?: SaleTransactionStatusEnum;
    constructor(order?: SaleTransactionEntity);
    get total(): {
        units: number;
        price: number;
    };
}
export declare class UpdateSaleTransactionRequestValidator extends CreateSaleTransactionRequestValidator {
    items: SaleItemRequestValidator[];
    payment: any;
    method: FinancePaymentMethodEnum;
    status: any;
}
