import { AbstractRequestValidator } from '../../abstract.validator';
export declare class PlaceSupplierOrderRequestValidator extends AbstractRequestValidator {
    recipientBirthday?: string;
}
export declare class RegisterSupplierOrderRequestValidator extends AbstractRequestValidator {
    externalOrderId: string;
}
