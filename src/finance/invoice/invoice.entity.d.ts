import { AbstractEntity, MongoEntity } from '../../abstract.entity';
import { FinanceInvoiceStatusEnum, FinanceInvoiceTypeEnum } from './invoice.enum';
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
