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
exports.UpdateFinanceInvoiceRequestValidator = exports.CreateFinanceInvoiceRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const invoice_enum_1 = require("./invoice.enum");
const abstract_validator_1 = require("../../abstract.validator");
class CreateFinanceInvoiceRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    order;
    orderModel;
    customer;
    type;
    total;
    subtotal;
    tax;
    dueDate;
    notes;
    status;
    constructor(invoice) {
        super();
        if (!invoice) {
            return;
        }
        this.order = (invoice.order?._id || invoice.order);
        this.orderModel = invoice.orderModel;
        this.type = invoice.type;
        this.total = invoice.total;
        this.subtotal = invoice.subtotal;
        this.tax = invoice.tax;
        this.dueDate = invoice.dueDate;
        this.notes = invoice.notes;
        this.status = invoice.status;
    }
}
exports.CreateFinanceInvoiceRequestValidator = CreateFinanceInvoiceRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsIn)(['SaleTransactionEntity', 'PurchaseTransactionEntity']),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "orderModel", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "customer", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(invoice_enum_1.FinanceInvoiceTypeEnum),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFinanceInvoiceRequestValidator.prototype, "total", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFinanceInvoiceRequestValidator.prototype, "subtotal", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateFinanceInvoiceRequestValidator.prototype, "tax", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Date)
], CreateFinanceInvoiceRequestValidator.prototype, "dueDate", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(invoice_enum_1.FinanceInvoiceStatusEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateFinanceInvoiceRequestValidator.prototype, "status", void 0);
class UpdateFinanceInvoiceRequestValidator extends CreateFinanceInvoiceRequestValidator {
}
exports.UpdateFinanceInvoiceRequestValidator = UpdateFinanceInvoiceRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinanceInvoiceRequestValidator.prototype, "order", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinanceInvoiceRequestValidator.prototype, "orderModel", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateFinanceInvoiceRequestValidator.prototype, "type", void 0);
//# sourceMappingURL=request.validator.js.map