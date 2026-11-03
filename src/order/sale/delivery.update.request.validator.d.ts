import { AbstractRequestValidator } from '../../abstract.validator';
export declare class UpdateSaleDeliveryRecipientRequestValidator extends AbstractRequestValidator {
    name?: string;
    email?: string;
    phone?: string;
    document?: string;
    birthday?: string;
}
export declare class UpdateSaleDeliveryAddressRequestValidator extends AbstractRequestValidator {
    postalCode?: string;
    street?: string;
    number?: string;
    complement?: string | null;
    district?: string;
    city?: string;
    state?: string;
}
export declare class UpdateSaleDeliveryRequestValidator extends AbstractRequestValidator {
    recipient?: UpdateSaleDeliveryRecipientRequestValidator;
    address?: UpdateSaleDeliveryAddressRequestValidator;
    updateCustomer?: boolean;
}
