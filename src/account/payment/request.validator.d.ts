import { AbstractRequestValidator } from '../../abstract.validator';
import type { AccountPaymentEntity } from './payment.entity';
export declare class CreatePaymentRequestValidator extends AbstractRequestValidator {
    holder: string;
    hash: string;
    last4: string;
    brand: string;
    expMonth: number;
    expYear: number;
    constructor(payment?: AccountPaymentEntity);
}
export declare class UpdatePaymentRequestValidator extends CreatePaymentRequestValidator {
    holder: string;
    hash: never;
    last4: never;
    brand: never;
    expMonth: number;
    expYear: number;
}
