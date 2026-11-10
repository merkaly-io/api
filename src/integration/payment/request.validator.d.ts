import { AbstractRequestValidator } from '../../abstract.validator';
import { PaymentAccountCompanyTypeEnum, PaymentAccountPersonTypeEnum, PaymentPixKeyTypeEnum } from './account.enum';
export declare function isCnpj(value: unknown): boolean;
export declare function IsCnpj(): PropertyDecorator;
export declare function isPixKey(type: unknown, key: unknown): boolean;
export declare class PaymentAccountAddressRequestValidator extends AbstractRequestValidator {
    postalCode: string;
    street: string;
    number: string;
    complement?: string;
    district: string;
}
declare abstract class PaymentAccountContactRequestValidator extends AbstractRequestValidator {
    email: string;
    mobilePhone: string;
    incomeValue: number;
    address: PaymentAccountAddressRequestValidator;
}
export declare class CreatePaymentAccountRequestValidator extends PaymentAccountContactRequestValidator {
    personType: PaymentAccountPersonTypeEnum;
    name?: string;
    cpfCnpj?: string;
    birthDate?: string;
    companyType?: PaymentAccountCompanyTypeEnum;
    constructor();
}
export declare class UpdatePaymentAccountRequestValidator extends AbstractRequestValidator {
    email?: string;
    mobilePhone?: string;
    incomeValue?: number;
    birthDate?: string;
    companyType?: PaymentAccountCompanyTypeEnum;
    address?: PaymentAccountAddressRequestValidator;
}
export declare class UpdatePaymentWithdrawalRequestValidator extends AbstractRequestValidator {
    pixKeyType: PaymentPixKeyTypeEnum;
    pixKey: string;
}
export declare class CreatePaymentWithdrawalRequestValidator extends AbstractRequestValidator {
    amount?: number;
}
export {};
