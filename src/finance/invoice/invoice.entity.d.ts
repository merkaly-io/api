import { AbstractEntity, MongoEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { FinanceInvoiceStatusEnum, FinanceInvoiceTypeEnum } from '../enums/invoice.enum';
export declare class FinanceInvoiceEntity extends AbstractEntity {
    order: MongoEntity<any>;
    orderModel: string;
    total: number;
    subtotal: number;
    tax: number;
    status: FinanceInvoiceStatusEnum;
    type: FinanceInvoiceTypeEnum;
    dueDate?: Date;
    notes?: string;
    readonly number: string;
}
