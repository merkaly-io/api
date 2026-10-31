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
exports.CreatePaymentChargeRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../finance/payment/payment.enum");
const abstract_validator_1 = require("../../abstract.validator");
const isCard = (body) => body.method === payment_enum_1.FinancePaymentMethodEnum.CARD;
const asString = ({ value }) => typeof value === 'number' ? String(value) : value;
class CreatePaymentChargeRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    method;
    token;
    paymentMethodId;
    paymentTypeId;
    issuerId;
    identificationType;
    identificationNumber;
    deviceId;
}
exports.CreatePaymentChargeRequestValidator = CreatePaymentChargeRequestValidator;
__decorate([
    (0, class_validator_1.IsIn)([payment_enum_1.FinancePaymentMethodEnum.PIX, payment_enum_1.FinancePaymentMethodEnum.CARD]),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isCard),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 256),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "token", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(isCard),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(1, 64),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "paymentMethodId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsIn)(['credit_card']),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "paymentTypeId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(asString),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 64),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "issuerId", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 16),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "identificationType", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(asString),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 32),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "identificationNumber", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 512),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "deviceId", void 0);
//# sourceMappingURL=request.validator.js.map