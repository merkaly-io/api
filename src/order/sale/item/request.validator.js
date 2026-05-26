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
exports.SaleItemRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class SaleItemRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    product;
    variant;
    warehouse;
    quantity = 1;
    notes;
    price = 0;
    constructor(item) {
        super();
        if (!item) {
            return;
        }
        this.product = (item.product?._id || item.product);
        this.variant = (item.variant?._id || item.variant);
        this.warehouse = (item.warehouse?._id || item.warehouse);
        if (item.quantity !== undefined) {
            this.quantity = item.quantity;
        }
        this.notes = item.notes;
        this.price = item.price?.unit || item.get?.('price.unit') || this.price;
    }
    get total() {
        return Math.trunc(this.quantity * this.price) || 0;
    }
}
exports.SaleItemRequestValidator = SaleItemRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SaleItemRequestValidator.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], SaleItemRequestValidator.prototype, "variant", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SaleItemRequestValidator.prototype, "warehouse", void 0);
__decorate([
    (0, class_validator_1.IsPositive)(),
    (0, class_validator_1.IsInt)(),
    __metadata("design:type", Object)
], SaleItemRequestValidator.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SaleItemRequestValidator.prototype, "notes", void 0);
//# sourceMappingURL=request.validator.js.map