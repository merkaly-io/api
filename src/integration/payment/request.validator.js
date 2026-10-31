"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentWithdrawalRequestValidator = exports.UpdatePaymentWithdrawalRequestValidator = exports.UpdatePaymentAccountRequestValidator = exports.CreatePaymentAccountRequestValidator = exports.PaymentAccountAddressRequestValidator = void 0;
exports.isCnpj = isCnpj;
exports.IsCnpj = IsCnpj;
exports.isPixKey = isPixKey;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const shipping_request_validator_1 = require("../../order/sale/shipping.request.validator");
const abstract_validator_1 = require("../../abstract.validator");
const account_enum_1 = require("./account.enum");
const lower = ({ value }) => typeof value === 'string' ? value.trim().toLowerCase() : value;
function isCnpj(value) {
    if (typeof value !== 'string' || !/^\d{14}$/.test(value) || /^(\d)\1{13}$/.test(value)) {
        return false;
    }
    const digit = (length) => {
        const weights = length === 12
            ? [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2]
            : [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
        const sum = weights.reduce((acc, weight, index) => acc + Number(value[index]) * weight, 0);
        const rest = sum % 11;
        return rest < 2 ? 0 : 11 - rest;
    };
    return digit(12) === Number(value[12]) && digit(13) === Number(value[13]);
}
function IsCnpj() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCnpj',
        validator: {
            defaultMessage: () => '$property must be a valid CNPJ',
            validate: isCnpj,
        },
    });
}
function isPixKey(type, key) {
    if (typeof key !== 'string')
        return false;
    switch (type) {
        case account_enum_1.PaymentPixKeyTypeEnum.CPF:
            return (0, shipping_request_validator_1.isCpf)(key);
        case account_enum_1.PaymentPixKeyTypeEnum.CNPJ:
            return isCnpj(key);
        case account_enum_1.PaymentPixKeyTypeEnum.EMAIL:
            return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(key) && key.length <= 77;
        case account_enum_1.PaymentPixKeyTypeEnum.PHONE:
            return /^\d{10,11}$/.test(key);
        case account_enum_1.PaymentPixKeyTypeEnum.EVP:
            return /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(key);
        default:
            return false;
    }
}
function IsPixKey() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isPixKey',
        validator: {
            defaultMessage: () => '$property must be a valid Pix key of the given pixKeyType',
            validate: (key, args) => isPixKey(args.object.pixKeyType, key),
        },
    });
}
const pixKey = ({ value, obj }) => {
    if (typeof value !== 'string')
        return value;
    const type = obj?.pixKeyType;
    if (type === account_enum_1.PaymentPixKeyTypeEnum.CPF ||
        type === account_enum_1.PaymentPixKeyTypeEnum.CNPJ ||
        type === account_enum_1.PaymentPixKeyTypeEnum.PHONE) {
        return value.replace(/\D/g, '');
    }
    return type === account_enum_1.PaymentPixKeyTypeEnum.EMAIL ? value.trim().toLowerCase() : value.trim();
};
function IsAccountDocument() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isAccountDocument',
        validator: {
            defaultMessage: () => '$property must be a valid CPF (individual) or CNPJ (company)',
            validate: (value, args) => (isCompany(args.object) ? isCnpj(value) : (0, shipping_request_validator_1.isCpf)(value)),
        },
    });
}
const isIndividual = (body) => body.personType === account_enum_1.PaymentAccountPersonTypeEnum.INDIVIDUAL;
const isCompany = (body) => body.personType === account_enum_1.PaymentAccountPersonTypeEnum.COMPANY;
class PaymentAccountAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    street;
    number;
    complement;
    district;
}
exports.PaymentAccountAddressRequestValidator = PaymentAccountAddressRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "district", void 0);
class PaymentAccountContactRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    email;
    mobilePhone;
    phone;
    incomeValue;
    site;
    address;
}
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(lower),
    __metadata("design:type", String)
], PaymentAccountContactRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{10,11}$/, { message: '$property must be the DDD and number (10 or 11 digits)' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentAccountContactRequestValidator.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{10,11}$/, { message: '$property must be the DDD and number (10 or 11 digits)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentAccountContactRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaymentAccountContactRequestValidator.prototype, "incomeValue", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountContactRequestValidator.prototype, "site", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentAccountAddressRequestValidator),
    __metadata("design:type", PaymentAccountAddressRequestValidator)
], PaymentAccountContactRequestValidator.prototype, "address", void 0);
class CreatePaymentAccountRequestValidator extends PaymentAccountContactRequestValidator {
    personType;
    name;
    cpfCnpj;
    birthDate;
    companyType;
    constructor() {
        super();
        this.personType = account_enum_1.PaymentAccountPersonTypeEnum.INDIVIDUAL;
        this.address = new PaymentAccountAddressRequestValidator();
    }
}
exports.CreatePaymentAccountRequestValidator = CreatePaymentAccountRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(account_enum_1.PaymentAccountPersonTypeEnum),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "personType", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "name", void 0);
__decorate([
    IsAccountDocument(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "cpfCnpj", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isIndividual),
    (0, shipping_request_validator_1.IsBirthday)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isCompany),
    (0, class_validator_1.IsEnum)(account_enum_1.PaymentAccountCompanyTypeEnum),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "companyType", void 0);
class UpdatePaymentAccountRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    email;
    mobilePhone;
    phone;
    incomeValue;
    site;
    birthDate;
    companyType;
    address;
}
exports.UpdatePaymentAccountRequestValidator = UpdatePaymentAccountRequestValidator;
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(lower),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{10,11}$/, { message: '$property must be the DDD and number (10 or 11 digits)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{10,11}$/, { message: '$property must be the DDD and number (10 or 11 digits)' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePaymentAccountRequestValidator.prototype, "incomeValue", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "site", void 0);
__decorate([
    (0, shipping_request_validator_1.IsBirthday)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "birthDate", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(account_enum_1.PaymentAccountCompanyTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "companyType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentAccountAddressRequestValidator),
    __metadata("design:type", PaymentAccountAddressRequestValidator)
], UpdatePaymentAccountRequestValidator.prototype, "address", void 0);
class UpdatePaymentWithdrawalRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    pixKeyType;
    pixKey;
    automatic;
}
exports.UpdatePaymentWithdrawalRequestValidator = UpdatePaymentWithdrawalRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(account_enum_1.PaymentPixKeyTypeEnum),
    __metadata("design:type", String)
], UpdatePaymentWithdrawalRequestValidator.prototype, "pixKeyType", void 0);
__decorate([
    IsPixKey(),
    (0, class_transformer_1.Transform)(pixKey),
    __metadata("design:type", String)
], UpdatePaymentWithdrawalRequestValidator.prototype, "pixKey", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdatePaymentWithdrawalRequestValidator.prototype, "automatic", void 0);
class CreatePaymentWithdrawalRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    amount;
}
exports.CreatePaymentWithdrawalRequestValidator = CreatePaymentWithdrawalRequestValidator;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreatePaymentWithdrawalRequestValidator.prototype, "amount", void 0);
//# sourceMappingURL=request.validator.js.map