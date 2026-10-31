import { AbstractRequestValidator } from '../../abstract.validator';
import { PaymentBankAccountTypeEnum, PaymentRecipientTypeEnum, PaymentTransferIntervalEnum } from './recipient.enum';
export declare function isCnpj(value: unknown): boolean;
export declare function IsCnpj(): PropertyDecorator;
export declare function isPastDate(value: unknown, today?: Date): boolean;
export declare function isTransferDay(day: unknown, interval: unknown): boolean;
export declare class PaymentRecipientAddressRequestValidator extends AbstractRequestValidator {
    zipCode: string;
    street: string;
    number: string;
    complement: string;
    neighborhood: string;
    city: string;
    state: string;
    referencePoint: string;
}
export declare class PaymentRecipientPhoneRequestValidator extends AbstractRequestValidator {
    ddd: string;
    number: string;
}
export declare abstract class PaymentRecipientPersonBaseRequestValidator extends AbstractRequestValidator {
    name: string;
    email: string;
    document: string;
    birthdate: string;
    monthlyIncome: number;
    professionalOccupation: string;
    motherName?: string;
}
export declare class PaymentRecipientIndividualRequestValidator extends PaymentRecipientPersonBaseRequestValidator {
    siteUrl?: string;
}
export declare class PaymentRecipientPartnerRequestValidator extends PaymentRecipientPersonBaseRequestValidator {
    address: PaymentRecipientAddressRequestValidator;
    phone: PaymentRecipientPhoneRequestValidator;
    constructor();
}
export declare class PaymentRecipientCorporationRequestValidator extends AbstractRequestValidator {
    companyName: string;
    tradingName: string;
    email: string;
    document: string;
    siteUrl?: string;
    annualRevenue: number;
    corporationType?: string;
    foundingDate?: string;
    partner: PaymentRecipientPartnerRequestValidator;
    constructor();
}
export declare class PaymentRecipientBankAccountRequestValidator extends AbstractRequestValidator {
    bank: string;
    branchNumber: string;
    branchCheckDigit?: string;
    accountNumber: string;
    accountCheckDigit: string;
    type: PaymentBankAccountTypeEnum;
}
export declare class PaymentRecipientTransferSettingsRequestValidator extends AbstractRequestValidator {
    interval: PaymentTransferIntervalEnum;
    day: number;
    constructor();
}
export declare class CreatePaymentRecipientRequestValidator extends AbstractRequestValidator {
    type: PaymentRecipientTypeEnum;
    individual?: PaymentRecipientIndividualRequestValidator;
    corporation?: PaymentRecipientCorporationRequestValidator;
    address: PaymentRecipientAddressRequestValidator;
    phone: PaymentRecipientPhoneRequestValidator;
    bankAccount: PaymentRecipientBankAccountRequestValidator;
    transferSettings: PaymentRecipientTransferSettingsRequestValidator;
    constructor();
}
export declare class UpdatePaymentRecipientRequestValidator extends AbstractRequestValidator {
    name?: string;
    email?: string;
    bankAccount?: PaymentRecipientBankAccountRequestValidator;
}
export declare class UpdatePaymentTransferSettingsRequestValidator extends PaymentRecipientTransferSettingsRequestValidator {
}
