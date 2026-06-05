import { AbstractEntity } from '../../../abstract.entity';
import { SaleCustomerTypeEnum } from './customer.enum';
export declare class SaleCustomerEntity extends AbstractEntity {
    name: string;
    type: SaleCustomerTypeEnum;
    description: string;
    email: string;
    phone?: string;
    website?: string;
    logo?: string;
    taxId?: string;
    active: boolean;
}
