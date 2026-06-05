import { FinanceInvoiceStatusEnum, FinanceInvoiceTypeEnum } from './invoice.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import type { FinanceInvoiceEntity } from './invoice.entity';
export declare class CreateFinanceInvoiceRequestValidator extends AbstractRequestValidator {
    order: string;
    orderModel: string;
    customer?: string;
    type: FinanceInvoiceTypeEnum;
    total?: number;
    subtotal?: number;
    tax?: number;
    dueDate?: Date;
    notes?: string;
    status?: FinanceInvoiceStatusEnum;
    constructor(invoice?: FinanceInvoiceEntity);
}
export declare class UpdateFinanceInvoiceRequestValidator extends CreateFinanceInvoiceRequestValidator {
    order: string;
    orderModel: string;
    type: FinanceInvoiceTypeEnum;
}
