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
exports.UpdatePurchaseTransactionRequestValidator = exports.CreatePurchaseTransactionRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../../../finance/enums/payment.enum");
const transaction_enum_1 = require("../../enums/transaction.enum");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
const request_validator_1 = require("../item/request.validator");
class CreatePurchaseTransactionRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    items = [];
    method;
    notes;
    vendor;
    warehouse;
    payment = payment_enum_1.FinancePaymentStatusEnum.PENDING;
    status = transaction_enum_1.PurchaseTransactionStatusEnum.OPEN;
    constructor(order) {
        super();
        if (!order) {
            return;
        }
        this.notes = order.notes;
        this.method = order.payment?.method;
        this.vendor = (order.vendor?._id || order.vendor);
        if (order.status !== undefined) {
            this.status = order.status;
        }
        if (order.payment?.status !== undefined) {
            this.payment = order.payment.status;
        }
        const [warehouse] = [...new Set(order.items?.map((item) => item.warehouse).filter(Boolean))];
        this.warehouse = (warehouse?._id || warehouse);
        this.items = order.items?.map((it) => new request_validator_1.PurchaseItemRequestValidator(it)) ?? this.items;
    }
    get total() {
        return this.items.reduce((acc, item) => {
            acc.units += item.quantity;
            acc.price += item.quantity * item.price;
            return acc;
        }, { units: 0, price: 0 });
    }
}
exports.CreatePurchaseTransactionRequestValidator = CreatePurchaseTransactionRequestValidator;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => request_validator_1.PurchaseItemRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreatePurchaseTransactionRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentMethodEnum),
    __metadata("design:type", String)
], CreatePurchaseTransactionRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseTransactionRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseTransactionRequestValidator.prototype, "vendor", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseTransactionRequestValidator.prototype, "warehouse", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseTransactionRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transaction_enum_1.PurchaseTransactionStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePurchaseTransactionRequestValidator.prototype, "status", void 0);
class UpdatePurchaseTransactionRequestValidator extends CreatePurchaseTransactionRequestValidator {
}
exports.UpdatePurchaseTransactionRequestValidator = UpdatePurchaseTransactionRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePurchaseTransactionRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePurchaseTransactionRequestValidator.prototype, "method", void 0);
//# sourceMappingURL=request.validator.js.map