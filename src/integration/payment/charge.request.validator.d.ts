import { AbstractRequestValidator } from '../../abstract.validator';
import type { StorePaymentMethod } from './charge';
export declare function isCardNumber(value: unknown): boolean;
export declare function isCardExpiry(month: unknown, year: unknown): boolean;
export declare class PaymentCardRequestValidator extends AbstractRequestValidator {
    holderName: string;
    number: string;
    expiryMonth: string;
    expiryYear: string;
    ccv: string;
    holderDocument?: string;
}
export declare class CreatePaymentChargeRequestValidator extends AbstractRequestValidator {
    method: StorePaymentMethod;
    card?: PaymentCardRequestValidator;
}
