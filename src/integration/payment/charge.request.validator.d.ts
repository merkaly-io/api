import { AbstractRequestValidator } from '../../abstract.validator';
import type { StorePaymentMethod } from './charge';
export declare class CreatePaymentChargeRequestValidator extends AbstractRequestValidator {
    method: StorePaymentMethod;
    cardToken?: string;
}
