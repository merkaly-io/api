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
exports.UpdateSaleTransactionRequestValidator = exports.CreateSaleTransactionRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../../../finance/enums/payment.enum");
const transaction_enum_1 = require("../../enums/transaction.enum");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
const request_validator_1 = require("../item/request.validator");
class CreateSaleTransactionRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    items = [];
    method;
    notes;
    customer;
    warehouse;
    payment = payment_enum_1.FinancePaymentStatusEnum.PENDING;
    status = transaction_enum_1.SaleTransactionStatusEnum.OPEN;
    constructor(order) {
        super();
        if (!order) {
            return;
        }
        this.notes = order.notes;
        this.method = order.payment?.method;
        this.customer = (order.customer?._id || order.customer);
        if (order.status !== undefined) {
            this.status = order.status;
        }
        if (order.payment?.status !== undefined) {
            this.payment = order.payment.status;
        }
        this.warehouse = (order.warehouse?._id || order.warehouse);
        this.items = order.items?.map((it) => new request_validator_1.SaleItemRequestValidator(it)) ?? this.items;
    }
    get total() {
        return this.items.reduce((acc, item) => {
            acc.units += item.quantity;
            acc.price += item.quantity * item.price;
            return acc;
        }, { units: 0, price: 0 });
    }
}
exports.CreateSaleTransactionRequestValidator = CreateSaleTransactionRequestValidator;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => request_validator_1.SaleItemRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreateSaleTransactionRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentMethodEnum),
    __metadata("design:type", String)
], CreateSaleTransactionRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleTransactionRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleTransactionRequestValidator.prototype, "customer", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleTransactionRequestValidator.prototype, "warehouse", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleTransactionRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transaction_enum_1.SaleTransactionStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreateSaleTransactionRequestValidator.prototype, "status", void 0);
class UpdateSaleTransactionRequestValidator extends CreateSaleTransactionRequestValidator {
    payment = undefined;
    status = undefined;
}
exports.UpdateSaleTransactionRequestValidator = UpdateSaleTransactionRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateSaleTransactionRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.ValidateIf)(() => false),
    (0, class_transformer_1.Transform)(() => undefined),
    __metadata("design:type", Object)
], UpdateSaleTransactionRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSaleTransactionRequestValidator.prototype, "method", void 0);
//# sourceMappingURL=request.validator.js.map