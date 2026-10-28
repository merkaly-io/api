import { ContactCustomerTypeEnum } from './customer.enum';
import { AbstractRequestValidator } from '../../abstract.validator';
import type { ContactCustomerEntity } from './customer.entity';
export declare class CreateContactCustomerRequestValidator extends AbstractRequestValidator {
    name: string;
    type: ContactCustomerTypeEnum;
    description?: string;
    email?: string;
    logo?: string;
    phone?: string;
    website?: string;
    taxId?: string;
    active?: boolean;
    constructor(customer?: ContactCustomerEntity);
}
export declare class UpdateContactCustomerRequestValidator extends CreateContactCustomerRequestValidator {
    name: string;
}
