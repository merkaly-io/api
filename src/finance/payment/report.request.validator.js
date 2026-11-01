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
exports.FinancePaymentReportSearchRequestValidator = exports.FinancePaymentReportRangeRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const charge_enum_1 = require("../../integration/payment/charge.enum");
const abstract_validator_1 = require("../../abstract.validator");
const payment_enum_1 = require("./payment.enum");
const REPORT_STATUSES = [
    ...Object.values(charge_enum_1.PaymentChargeStatusEnum),
    'UNKNOWN',
];
class FinancePaymentReportRangeRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    from;
    to;
}
exports.FinancePaymentReportRangeRequestValidator = FinancePaymentReportRangeRequestValidator;
__decorate([
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], FinancePaymentReportRangeRequestValidator.prototype, "from", void 0);
__decorate([
    (0, class_validator_1.IsISO8601)(),
    __metadata("design:type", String)
], FinancePaymentReportRangeRequestValidator.prototype, "to", void 0);
class FinancePaymentReportSearchRequestValidator extends FinancePaymentReportRangeRequestValidator {
    org;
    status;
    method;
    page = 1;
    limit = 25;
}
exports.FinancePaymentReportSearchRequestValidator = FinancePaymentReportSearchRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FinancePaymentReportSearchRequestValidator.prototype, "org", void 0);
__decorate([
    (0, class_validator_1.IsIn)(REPORT_STATUSES),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FinancePaymentReportSearchRequestValidator.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentMethodEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], FinancePaymentReportSearchRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 1)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FinancePaymentReportSearchRequestValidator.prototype, "page", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 25)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(100),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], FinancePaymentReportSearchRequestValidator.prototype, "limit", void 0);
//# sourceMappingURL=report.request.validator.js.map