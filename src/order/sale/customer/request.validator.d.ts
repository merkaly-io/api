import { SaleCustomerTypeEnum } from './customer.enum';
import { AbstractRequestValidator } from '../../../abstract.validator';
import type { SaleCustomerEntity } from './customer.entity';
export declare class CreateSaleCustomerRequestValidator extends AbstractRequestValidator {
    name: string;
    type: SaleCustomerTypeEnum;
    description?: string;
    email?: string;
    logo?: string;
    phone?: string;
    website?: string;
    taxId?: string;
    active?: boolean;
    constructor(customer?: SaleCustomerEntity);
}
export declare class UpdateSaleCustomerRequestValidator extends CreateSaleCustomerRequestValidator {
    name: string;
}
