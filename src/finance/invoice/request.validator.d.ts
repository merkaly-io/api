import { FinanceInvoiceStatusEnum, FinanceInvoiceTypeEnum } from 'src/domain/finance/enums/invoice.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { FinanceInvoiceEntity } from 'src/domain/finance/entities/invoice.entity';
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
