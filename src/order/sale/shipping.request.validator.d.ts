import { AbstractRequestValidator } from '../../abstract.validator';
import type { OrderSaleShippingEntity } from './sale.shipping.entity';
export declare const BRAZIL_STATES: string[];
export declare function isCpf(value: unknown): boolean;
export declare const BIRTHDAY_MIN_AGE = 16;
export declare const BIRTHDAY_MAX_AGE = 120;
export declare function isBirthday(value: unknown, today?: Date): boolean;
export declare function IsBirthday(): PropertyDecorator;
export declare class SaleShippingRecipientRequestValidator extends AbstractRequestValidator {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export declare class SaleShippingAddressRequestValidator extends AbstractRequestValidator {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
}
export declare class SaleShippingRequestValidator extends AbstractRequestValidator {
    recipient: SaleShippingRecipientRequestValidator;
    address: SaleShippingAddressRequestValidator;
    constructor(shipping?: OrderSaleShippingEntity);
}
