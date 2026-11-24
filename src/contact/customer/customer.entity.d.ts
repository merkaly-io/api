import { ContactEntity } from "../../contact.entity";
import { ContactCustomerTypeEnum } from './customer.enum';
export declare class ContactCustomerEntity extends ContactEntity {
    type: ContactCustomerTypeEnum;
}
export interface ContactCustomerStats {
    orders: number;
    openOrders: number;
    spent: number;
    lastOrderAt: Date | null;
    attention: number;
}
export type ContactCustomerStatsMeta = Record<string, ContactCustomerStats>;
