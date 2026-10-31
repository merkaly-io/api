import { AbstractRequestValidator } from '../../abstract.validator';
import type { StorePaymentMethod } from './charge';
export declare class CreatePaymentChargeRequestValidator extends AbstractRequestValidator {
    method: StorePaymentMethod;
    token?: string;
    paymentMethodId?: string;
    paymentTypeId?: 'credit_card';
    issuerId?: string;
    identificationType?: string;
    identificationNumber?: string;
}
