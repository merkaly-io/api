import { SaleCustomerTypeEnum } from 'src/domain/order/sale/enums/customer.enum';
import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { SaleCustomerEntity } from 'src/domain/order/sale/entities/customer.entity';
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
