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
exports.UpdatePurchaseRequestValidator = exports.CreatePurchaseRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const payment_enum_1 = require("../../finance/payment/payment.enum");
const purchase_enum_1 = require("./purchase.enum");
const abstract_validator_1 = require("../../abstract.validator");
const item_request_validator_1 = require("./item.request.validator");
class CreatePurchaseRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    items = [];
    method;
    notes;
    vendor;
    customerOrder;
    payment = payment_enum_1.FinancePaymentStatusEnum.PENDING;
    status = purchase_enum_1.OrderPurchaseStatusEnum.OPEN;
    constructor(order) {
        super();
        if (!order) {
            return;
        }
        this.notes = order.notes;
        this.method = order.payment?.method;
        this.vendor = (order.vendor?._id || order.vendor);
        this.customerOrder = (order.customerOrder?._id || order.customerOrder);
        if (order.status !== undefined) {
            this.status = order.status;
        }
        if (order.payment?.status !== undefined) {
            this.payment = order.payment.status;
        }
        this.items = order.items?.map((it) => new item_request_validator_1.PurchaseItemRequestValidator(it)) ?? this.items;
    }
    get total() {
        return this.items.reduce((acc, item) => {
            acc.units += item.quantity;
            acc.price += item.quantity * item.price;
            return acc;
        }, { units: 0, price: 0 });
    }
}
exports.CreatePurchaseRequestValidator = CreatePurchaseRequestValidator;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_transformer_1.Type)(() => item_request_validator_1.PurchaseItemRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreatePurchaseRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentMethodEnum),
    __metadata("design:type", String)
], CreatePurchaseRequestValidator.prototype, "method", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseRequestValidator.prototype, "vendor", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseRequestValidator.prototype, "customerOrder", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(payment_enum_1.FinancePaymentStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseRequestValidator.prototype, "payment", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(purchase_enum_1.OrderPurchaseStatusEnum),
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], CreatePurchaseRequestValidator.prototype, "status", void 0);
class UpdatePurchaseRequestValidator extends CreatePurchaseRequestValidator {
}
exports.UpdatePurchaseRequestValidator = UpdatePurchaseRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdatePurchaseRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePurchaseRequestValidator.prototype, "method", void 0);
//# sourceMappingURL=request.validator.js.map