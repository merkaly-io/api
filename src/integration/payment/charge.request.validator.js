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
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../finance/payment/payment.enum");
const abstract_validator_1 = require("../../abstract.validator");
const isCard = (body) => body.method === payment_enum_1.FinancePaymentMethodEnum.CARD;
class CreatePaymentChargeRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    method;
    cardToken;
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
    (0, class_validator_1.Length)(1, 128),
    __metadata("design:type", String)
], CreatePaymentChargeRequestValidator.prototype, "cardToken", void 0);
//# sourceMappingURL=charge.request.validator.js.map