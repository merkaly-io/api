import { FinancePaymentStatusEnum, FinancePaymentMethodEnum } from '../../finance/payment/payment.enum';
import { OrderSaleStatusEnum } from './sale.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import { SaleItemRequestValidator } from './item.request.validator';
import type { OrderSaleEntity } from './sale.entity';
export declare class CreateSaleRequestValidator extends AbstractRequestValidator {
    items: SaleItemRequestValidator[];
    method: FinancePaymentMethodEnum;
    notes?: string;
    customer?: string;
    payment: FinancePaymentStatusEnum;
    status?: OrderSaleStatusEnum;
    constructor(order?: OrderSaleEntity);
    get total(): {
        units: number;
        price: number;
    };
}
export declare class UpdateSaleRequestValidator extends CreateSaleRequestValidator {
    items: SaleItemRequestValidator[];
    payment: any;
    method: FinancePaymentMethodEnum;
    status: any;
}
