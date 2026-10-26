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
exports.UpdateVariantRequestValidator = exports.CreateVariantRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class CreateVariantRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    product;
    price;
    active;
    constructor(variant) {
        super();
        if (!variant) {
            return;
        }
        this.product = (variant.product?._id || variant.product);
        this.price = variant.price;
        this.active = variant.active;
    }
}
exports.CreateVariantRequestValidator = CreateVariantRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVariantRequestValidator.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVariantRequestValidator.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateVariantRequestValidator.prototype, "active", void 0);
class UpdateVariantRequestValidator extends CreateVariantRequestValidator {
}
exports.UpdateVariantRequestValidator = UpdateVariantRequestValidator;
//# sourceMappingURL=request.validator.js.map