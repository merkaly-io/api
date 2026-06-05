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
exports.UpdatePaymentRequestValidator = exports.CreatePaymentRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
class CreatePaymentRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    holder;
    hash;
    last4;
    brand;
    expMonth;
    expYear;
    constructor(payment) {
        super();
        if (!payment) {
            return;
        }
        this.holder = payment.holder;
        this.hash = payment.hash;
        this.last4 = payment.last4;
        this.brand = payment.brand;
        this.expMonth = payment.expMonth;
        this.expYear = payment.expYear;
    }
}
exports.CreatePaymentRequestValidator = CreatePaymentRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreatePaymentRequestValidator.prototype, "holder", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 255),
    __metadata("design:type", String)
], CreatePaymentRequestValidator.prototype, "hash", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(4, 4),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreatePaymentRequestValidator.prototype, "last4", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 50),
    __metadata("design:type", String)
], CreatePaymentRequestValidator.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(12),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentRequestValidator.prototype, "expMonth", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(2000),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", Number)
], CreatePaymentRequestValidator.prototype, "expYear", void 0);
class UpdatePaymentRequestValidator extends CreatePaymentRequestValidator {
}
exports.UpdatePaymentRequestValidator = UpdatePaymentRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePaymentRequestValidator.prototype, "holder", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdatePaymentRequestValidator.prototype, "hash", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdatePaymentRequestValidator.prototype, "last4", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", void 0)
], UpdatePaymentRequestValidator.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePaymentRequestValidator.prototype, "expMonth", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdatePaymentRequestValidator.prototype, "expYear", void 0);
//# sourceMappingURL=request.validator.js.map