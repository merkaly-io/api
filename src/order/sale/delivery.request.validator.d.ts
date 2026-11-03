import { AbstractRequestValidator } from '../../abstract.validator';
import type { OrderSaleDeliveryEntity } from './sale.entity';
export declare const BRAZIL_STATES: string[];
export declare const trim: ({ value }: {
    value: unknown;
}) => unknown;
export declare const digits: ({ value }: {
    value: unknown;
}) => unknown;
export declare const upper: ({ value }: {
    value: unknown;
}) => unknown;
export declare function isCpf(value: unknown): boolean;
export declare function IsCpf(): PropertyDecorator;
export declare const BIRTHDAY_MIN_AGE = 16;
export declare const BIRTHDAY_MAX_AGE = 120;
export declare function isBirthday(value: unknown, today?: Date): boolean;
export declare function IsBirthday(): PropertyDecorator;
export declare const FULL_NAME_MESSAGE = "recipient.name must be the full name as registered in the CPF";
export declare function isFullName(value: unknown): boolean;
export declare class SaleDeliveryRecipientRequestValidator extends AbstractRequestValidator {
    name: string;
    email: string;
    phone: string;
    document: string;
    birthday?: string;
}
export declare class SaleDeliveryAddressRequestValidator extends AbstractRequestValidator {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
    city: string;
    state: string;
    country: string;
}
export declare class SaleDeliveryRequestValidator extends AbstractRequestValidator {
    recipient: SaleDeliveryRecipientRequestValidator;
    address: SaleDeliveryAddressRequestValidator;
    constructor(delivery?: OrderSaleDeliveryEntity);
}
