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
const brazilian_utils_1 = require("@brazilian-utils/brazilian-utils");
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const person_validator_1 = require("../../person.validator");
const transform_validator_1 = require("../../transform.validator");
const account_enum_1 = require("./account.enum");
const lower = ({ value }) => typeof value === 'string' ? value.trim().toLowerCase() : value;
function isCnpj(value) {
    return typeof value === 'string' && /^\d{14}$/.test(value) && (0, brazilian_utils_1.isValidCnpj)(value);
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
            return (0, person_validator_1.isCpf)(key);
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
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], PaymentAccountAddressRequestValidator.prototype, "district", void 0);
class PaymentAccountContactRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    email;
    mobilePhone;
    incomeValue;
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
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], PaymentAccountContactRequestValidator.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaymentAccountContactRequestValidator.prototype, "incomeValue", void 0);
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
    (0, class_validator_1.ValidateIf)(isCompany),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isCompany),
    IsCnpj(),
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], CreatePaymentAccountRequestValidator.prototype, "cpfCnpj", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, person_validator_1.IsBirthday)(),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
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
    incomeValue;
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
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], UpdatePaymentAccountRequestValidator.prototype, "mobilePhone", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePaymentAccountRequestValidator.prototype, "incomeValue", void 0);
__decorate([
    (0, person_validator_1.IsBirthday)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
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