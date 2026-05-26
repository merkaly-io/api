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
exports.UpdateFinancePaymentRequestValidator = exports.CreateFinancePaymentRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../enums/payment.enum");
const abstract_validator_1 = require("../../../../infrastructure/abstracts/abstract.validator");
class CreateFinancePaymentRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    type;
    order;
    method;
    total;
    status;
    constructor(payment) {
        super();
        if (!payment) {
            return;
        }
        this.type = payment.type;
        this.order = (payment.order?._id || payment.order);
        this.method = payment.method;
        this.total = payment.amount;
        this.status = payment.status;
    }
}
exports.CreateFinancePaymentRequestValidator = CreateFinancePaymentRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentTypeEnum),
    __metadata("design:type", String)
], CreateFinancePaymentRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinancePaymentRequestValidator.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentMethodEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinancePaymentRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFinancePaymentRequestValidator.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentStatusEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinancePaymentRequestValidator.prototype, "status", void 0);
class UpdateFinancePaymentRequestValidator extends CreateFinancePaymentRequestValidator {
}
exports.UpdateFinancePaymentRequestValidator = UpdateFinancePaymentRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinancePaymentRequestValidator.prototype, "type", void 0);
//# sourceMappingURL=request.validator.js.map