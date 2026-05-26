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
exports.UpdateVariantRequestValidator = exports.CreateVariantRequestValidator = exports.VariantOptionRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class VariantOptionRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    type;
    value;
    constructor(option) {
        super();
        if (!option) {
            return;
        }
        this.type = (option.type?._id || option.type);
        this.value = option.value;
    }
}
exports.VariantOptionRequestValidator = VariantOptionRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], VariantOptionRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], VariantOptionRequestValidator.prototype, "value", void 0);
class CreateVariantRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    product;
    sku;
    price;
    minStockLevel;
    options = [];
    active;
    gtin;
    constructor(variant) {
        super();
        if (!variant) {
            return;
        }
        this.product = (variant.product?._id || variant.product);
        this.sku = variant.identifier?.sku;
        this.price = variant.price;
        this.minStockLevel = variant.policy?.minStock;
        this.active = variant.active;
        this.gtin = variant.identifier?.gtin;
        this.options =
            variant.options?.map((option) => new VariantOptionRequestValidator(option)) ?? this.options;
    }
}
exports.CreateVariantRequestValidator = CreateVariantRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVariantRequestValidator.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVariantRequestValidator.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVariantRequestValidator.prototype, "price", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateVariantRequestValidator.prototype, "minStockLevel", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => VariantOptionRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreateVariantRequestValidator.prototype, "options", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateVariantRequestValidator.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateVariantRequestValidator.prototype, "gtin", void 0);
class UpdateVariantRequestValidator extends CreateVariantRequestValidator {
}
exports.UpdateVariantRequestValidator = UpdateVariantRequestValidator;
//# sourceMappingURL=request.validator.js.map