import { AbstractRequestValidator } from '../../abstract.validator';
export declare class UpdateSaleShippingRecipientRequestValidator extends AbstractRequestValidator {
    name?: string;
    email?: string;
    phone?: string;
    document?: string;
    birthday?: string;
}
export declare class UpdateSaleShippingAddressRequestValidator extends AbstractRequestValidator {
    postalCode?: string;
    street?: string;
    number?: string;
    complement?: string | null;
    district?: string;
    city?: string;
    state?: string;
}
export declare class UpdateSaleShippingRequestValidator extends AbstractRequestValidator {
    recipient?: UpdateSaleShippingRecipientRequestValidator;
    address?: UpdateSaleShippingAddressRequestValidator;
    updateCustomer?: boolean;
}
