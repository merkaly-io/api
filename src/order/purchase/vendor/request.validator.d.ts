import { AbstractRequestValidator } from 'src/infrastructure/abstracts/abstract.validator';
import type { PurchaseVendorEntity } from 'src/domain/order/purchase/entities/vendor.entity';
export declare class CreatePurchaseVendorRequestValidator extends AbstractRequestValidator {
    name: string;
    description?: string;
    email?: string;
    logo?: string;
    phone?: string;
    website?: string;
    taxId?: string;
    active?: boolean;
    constructor(vendor?: PurchaseVendorEntity);
}
export declare class UpdatePurchaseVendorRequestValidator extends CreatePurchaseVendorRequestValidator {
    name: string;
}
