import { AbstractEntity } from 'src/infrastructure/abstracts/abstract.entity';
import { SaleCustomerTypeEnum } from '../enums/customer.enum';
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
