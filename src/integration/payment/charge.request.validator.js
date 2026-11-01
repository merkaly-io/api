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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePaymentChargeRequestValidator = exports.PaymentCardRequestValidator = void 0;
exports.isCardNumber = isCardNumber;
exports.isCardExpiry = isCardExpiry;
const card_validator_1 = __importDefault(require("card-validator"));
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../finance/payment/payment.enum");
const shipping_request_validator_1 = require("../../order/sale/shipping.request.validator");
const abstract_validator_1 = require("../../abstract.validator");
const request_validator_1 = require("./request.validator");
function isCardNumber(value) {
    return (typeof value === 'string' && /^\d{13,19}$/.test(value) && card_validator_1.default.number(value).isValid);
}
function isCardExpiry(month, year) {
    if (typeof month !== 'string' || typeof year !== 'string')
        return false;
    return (/^(0[1-9]|1[0-2])$/.test(month) &&
        /^\d{4}$/.test(year) &&
        card_validator_1.default.expirationDate({ month, year }).isValid);
}
function IsCardNumber() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCardNumber',
        validator: {
            defaultMessage: () => 'card.number is not a valid card number',
            validate: isCardNumber,
        },
    });
}
function IsCardExpiry() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCardExpiry',
        validator: {
            defaultMessage: () => 'card expiry must be a valid future month (MM and YYYY)',
            validate: (year, args) => isCardExpiry(args.object.expiryMonth, year),
        },
    });
}
function IsCpfOrCnpj() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCpfOrCnpj',
        validator: {
            defaultMessage: () => '$property must be a valid CPF or CNPJ',
            validate: (value) => (0, shipping_request_validator_1.isCpf)(value) || (0, request_validator_1.isCnpj)(value),
        },
    });
}
const twoDigits = ({ value }) => typeof value === 'number' ? String(value).padStart(2, '0') : (0, shipping_request_validator_1.digits)({ value });
const fourDigits = ({ value }) => {
    const year = typeof value === 'number' ? String(value) : (0, shipping_request_validator_1.digits)({ value });
    return typeof year === 'string' && year.length === 2 ? `20${year}` : year;
};
class PaymentCardRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    holderName;
    number;
    expiryMonth;
    expiryYear;
    ccv;
    holderDocument;
}
exports.PaymentCardRequestValidator = PaymentCardRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 100, { message: 'card.holderName must have 2 to 100 characters' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "holderName", void 0);
__decorate([
    IsCardNumber(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(0[1-9]|1[0-2])$/, { message: 'card.expiryMonth must be MM (01 to 12)' }),
    (0, class_transformer_1.Transform)(twoDigits),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "expiryMonth", void 0);
__decorate([
    IsCardExpiry(),
    (0, class_transformer_1.Transform)(fourDigits),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "expiryYear", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^\d{3,4}$/, { message: 'card.ccv must have 3 or 4 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "ccv", void 0);
__decorate([
    IsCpfOrCnpj(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], PaymentCardRequestValidator.prototype, "holderDocument", void 0);
const isCard = (body) => body.method === payment_enum_1.FinancePaymentMethodEnum.CARD;
class CreatePaymentChargeRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    method;
    card;
}
exports.CreatePaymentChargeRequestValidator = CreatePaymentChargeRequestValidator;
__decorate([
    (0, class_validator_1.IsIn)([payment_enum_1.FinancePaymentMethodEnum.PIX, payment_enum_1.FinancePaymentMethodEnum.CARD]),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isCard),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaymentCardRequestValidator),
    __metadata("design:type", PaymentCardRequestValidator)
], CreatePaymentChargeRequestValidator.prototype, "card", void 0);
//# sourceMappingURL=charge.request.validator.js.map