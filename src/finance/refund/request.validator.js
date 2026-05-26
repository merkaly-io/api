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
exports.UpdateFinanceRefundRequestValidator = exports.CreateFinanceRefundRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const refund_enum_1 = require("../../enums/refund.enum");
const abstract_validator_1 = require("../../../../infrastructure/abstracts/abstract.validator");
class CreateFinanceRefundRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    payment;
    reason;
    amount;
    notes;
    status;
    constructor(refund) {
        super();
        if (!refund) {
            return;
        }
        this.payment = (refund.payment?._id || refund.payment);
        this.reason = refund.reason;
        this.amount = refund.amount;
        this.notes = refund.notes;
        this.status = refund.status;
    }
}
exports.CreateFinanceRefundRequestValidator = CreateFinanceRefundRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateFinanceRefundRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(refund_enum_1.FinanceRefundReasonEnum),
    __metadata("design:type", String)
], CreateFinanceRefundRequestValidator.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(0.01),
    __metadata("design:type", Number)
], CreateFinanceRefundRequestValidator.prototype, "amount", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceRefundRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(refund_enum_1.FinanceRefundStatusEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceRefundRequestValidator.prototype, "status", void 0);
class UpdateFinanceRefundRequestValidator extends CreateFinanceRefundRequestValidator {
}
exports.UpdateFinanceRefundRequestValidator = UpdateFinanceRefundRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinanceRefundRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinanceRefundRequestValidator.prototype, "reason", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateFinanceRefundRequestValidator.prototype, "amount", void 0);
//# sourceMappingURL=request.validator.js.map