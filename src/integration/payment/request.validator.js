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
exports.UpdatePaymentTransferSettingsRequestValidator = exports.UpdatePaymentRecipientRequestValidator = exports.CreatePaymentRecipientRequestValidator = exports.PaymentRecipientTransferSettingsRequestValidator = exports.PaymentRecipientBankAccountRequestValidator = exports.PaymentRecipientCorporationRequestValidator = exports.PaymentRecipientPartnerRequestValidator = exports.PaymentRecipientIndividualRequestValidator = exports.PaymentRecipientPersonBaseRequestValidator = exports.PaymentRecipientPhoneRequestValidator = exports.PaymentRecipientAddressRequestValidator = void 0;
exports.isCnpj = isCnpj;
exports.IsCnpj = IsCnpj;
exports.isPastDate = isPastDate;
exports.isTransferDay = isTransferDay;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const shipping_request_validator_1 = require("../../order/sale/shipping.request.validator");
const abstract_validator_1 = require("../../abstract.validator");
const recipient_enum_1 = require("./recipient.enum");
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
function isPastDate(value, today = new Date()) {
    const [, y, m, d] = (typeof value === 'string' && value.match(/^(\d{4})-(\d{2})-(\d{2})$/)) || [];
    if (!y)
        return false;
    const date = new Date(Date.UTC(Number(y), Number(m) - 1, Number(d)));
    return date.toISOString().slice(0, 10) === value && date.getTime() <= today.getTime();
}
function IsPastDate() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isPastDate',
        validator: {
            defaultMessage: () => '$property must be a real date (YYYY-MM-DD) not in the future',
            validate: (value) => isPastDate(value),
        },
    });
}
function isTransferDay(day, interval) {
    if (!Number.isInteger(day))
        return false;
    const value = day;
    if (interval === recipient_enum_1.PaymentTransferIntervalEnum.DAILY)
        return value === 0;
    if (interval === recipient_enum_1.PaymentTransferIntervalEnum.WEEKLY)
        return value >= 1 && value <= 5;
    if (interval === recipient_enum_1.PaymentTransferIntervalEnum.MONTHLY)
        return value >= 1 && value <= 31;
    return false;
}
function IsTransferDay() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isTransferDay',
        validator: {
            defaultMessage: () => '$property must be 0 for DAILY, 1 (monday) to 5 (friday) for WEEKLY or 1 to 31 for MONTHLY',
            validate: (day, args) => isTransferDay(day, args.object.interval),
        },
    });
}
class PaymentRecipientAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    zipCode;
    street;
    number;
    complement;
    neighborhood;
    city;
    state;
    referencePoint;
}
exports.PaymentRecipientAddressRequestValidator = PaymentRecipientAddressRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "zipCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "neighborhood", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsIn)(shipping_request_validator_1.BRAZIL_STATES, { message: '$property must be a Brazilian UF' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.upper),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientAddressRequestValidator.prototype, "referencePoint", void 0);
class PaymentRecipientPhoneRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    ddd;
    number;
}
exports.PaymentRecipientPhoneRequestValidator = PaymentRecipientPhoneRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{2}$/, { message: '$property must be the 2 digit area code' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientPhoneRequestValidator.prototype, "ddd", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{8,9}$/, { message: '$property must have 8 or 9 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientPhoneRequestValidator.prototype, "number", void 0);
class PaymentRecipientPersonBaseRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    document;
    birthdate;
    monthlyIncome;
    professionalOccupation;
    motherName;
}
exports.PaymentRecipientPersonBaseRequestValidator = PaymentRecipientPersonBaseRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(lower),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "email", void 0);
__decorate([
    (0, shipping_request_validator_1.IsCpf)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "document", void 0);
__decorate([
    (0, shipping_request_validator_1.IsBirthday)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "birthdate", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaymentRecipientPersonBaseRequestValidator.prototype, "monthlyIncome", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "professionalOccupation", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientPersonBaseRequestValidator.prototype, "motherName", void 0);
class PaymentRecipientIndividualRequestValidator extends PaymentRecipientPersonBaseRequestValidator {
    siteUrl;
}
exports.PaymentRecipientIndividualRequestValidator = PaymentRecipientIndividualRequestValidator;
__decorate([
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientIndividualRequestValidator.prototype, "siteUrl", void 0);
class PaymentRecipientPartnerRequestValidator extends PaymentRecipientPersonBaseRequestValidator {
    address;
    phone;
    constructor() {
        super();
        this.address = new PaymentRecipientAddressRequestValidator();
        this.phone = new PaymentRecipientPhoneRequestValidator();
    }
}
exports.PaymentRecipientPartnerRequestValidator = PaymentRecipientPartnerRequestValidator;
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientAddressRequestValidator),
    __metadata("design:type", PaymentRecipientAddressRequestValidator)
], PaymentRecipientPartnerRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientPhoneRequestValidator),
    __metadata("design:type", PaymentRecipientPhoneRequestValidator)
], PaymentRecipientPartnerRequestValidator.prototype, "phone", void 0);
class PaymentRecipientCorporationRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    companyName;
    tradingName;
    email;
    document;
    siteUrl;
    annualRevenue;
    corporationType;
    foundingDate;
    partner;
    constructor() {
        super();
        this.partner = new PaymentRecipientPartnerRequestValidator();
    }
}
exports.PaymentRecipientCorporationRequestValidator = PaymentRecipientCorporationRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "companyName", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "tradingName", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(lower),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "email", void 0);
__decorate([
    IsCnpj(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "document", void 0);
__decorate([
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "siteUrl", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], PaymentRecipientCorporationRequestValidator.prototype, "annualRevenue", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 40),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.upper),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "corporationType", void 0);
__decorate([
    IsPastDate(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentRecipientCorporationRequestValidator.prototype, "foundingDate", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientPartnerRequestValidator),
    __metadata("design:type", PaymentRecipientPartnerRequestValidator)
], PaymentRecipientCorporationRequestValidator.prototype, "partner", void 0);
class PaymentRecipientBankAccountRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    bank;
    branchNumber;
    branchCheckDigit;
    accountNumber;
    accountCheckDigit;
    type;
}
exports.PaymentRecipientBankAccountRequestValidator = PaymentRecipientBankAccountRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{3}$/, { message: '$property must be the 3 digit bank code' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "bank", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{1,4}$/, { message: '$property must have up to 4 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "branchNumber", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^[0-9xX]$/, { message: '$property must be 1 digit' }),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.upper),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "branchCheckDigit", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{1,13}$/, { message: '$property must have up to 13 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "accountNumber", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^[0-9xX]{1,2}$/, { message: '$property must be 1 or 2 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.upper),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "accountCheckDigit", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(recipient_enum_1.PaymentBankAccountTypeEnum),
    __metadata("design:type", String)
], PaymentRecipientBankAccountRequestValidator.prototype, "type", void 0);
class PaymentRecipientTransferSettingsRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    interval;
    day;
    constructor() {
        super();
        this.interval = recipient_enum_1.PaymentTransferIntervalEnum.DAILY;
        this.day = 0;
    }
}
exports.PaymentRecipientTransferSettingsRequestValidator = PaymentRecipientTransferSettingsRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(recipient_enum_1.PaymentTransferIntervalEnum),
    __metadata("design:type", String)
], PaymentRecipientTransferSettingsRequestValidator.prototype, "interval", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(31),
    IsTransferDay(),
    __metadata("design:type", Number)
], PaymentRecipientTransferSettingsRequestValidator.prototype, "day", void 0);
class CreatePaymentRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    type;
    individual;
    corporation;
    address;
    phone;
    bankAccount;
    transferSettings;
    constructor() {
        super();
        this.type = recipient_enum_1.PaymentRecipientTypeEnum.INDIVIDUAL;
        this.individual = new PaymentRecipientIndividualRequestValidator();
        this.corporation = new PaymentRecipientCorporationRequestValidator();
        this.address = new PaymentRecipientAddressRequestValidator();
        this.phone = new PaymentRecipientPhoneRequestValidator();
        this.bankAccount = new PaymentRecipientBankAccountRequestValidator();
        this.transferSettings = new PaymentRecipientTransferSettingsRequestValidator();
    }
}
exports.CreatePaymentRecipientRequestValidator = CreatePaymentRecipientRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(recipient_enum_1.PaymentRecipientTypeEnum),
    __metadata("design:type", String)
], CreatePaymentRecipientRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((body) => body.type === recipient_enum_1.PaymentRecipientTypeEnum.INDIVIDUAL),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientIndividualRequestValidator),
    __metadata("design:type", PaymentRecipientIndividualRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "individual", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)((body) => body.type === recipient_enum_1.PaymentRecipientTypeEnum.CORPORATION),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientCorporationRequestValidator),
    __metadata("design:type", PaymentRecipientCorporationRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "corporation", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientAddressRequestValidator),
    __metadata("design:type", PaymentRecipientAddressRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientPhoneRequestValidator),
    __metadata("design:type", PaymentRecipientPhoneRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientBankAccountRequestValidator),
    __metadata("design:type", PaymentRecipientBankAccountRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "bankAccount", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientTransferSettingsRequestValidator),
    __metadata("design:type", PaymentRecipientTransferSettingsRequestValidator)
], CreatePaymentRecipientRequestValidator.prototype, "transferSettings", void 0);
class UpdatePaymentRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    bankAccount;
}
exports.UpdatePaymentRecipientRequestValidator = UpdatePaymentRecipientRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdatePaymentRecipientRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(lower),
    __metadata("design:type", String)
], UpdatePaymentRecipientRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentRecipientBankAccountRequestValidator),
    __metadata("design:type", PaymentRecipientBankAccountRequestValidator)
], UpdatePaymentRecipientRequestValidator.prototype, "bankAccount", void 0);
class UpdatePaymentTransferSettingsRequestValidator extends PaymentRecipientTransferSettingsRequestValidator {
}
exports.UpdatePaymentTransferSettingsRequestValidator = UpdatePaymentTransferSettingsRequestValidator;
//# sourceMappingURL=request.validator.js.map