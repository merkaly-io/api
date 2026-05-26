import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from 'src/domain/finance/enums/payment.enum';
import { SaleTransactionStatusEnum } from 'src/domain/order/sale/enums/transaction.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import { SaleItemRequestValidator } from '../item/request.validator';
import type { SaleTransactionEntity } from '../../entities/transaction.entity';
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
