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
exports.CreateProductRequestValidator = exports.UpdateProductRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
const request_validator_1 = require("../variant/request.validator");
class ProductMetadataRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    category;
    brand;
    hashtags;
    constructor(product) {
        super();
        if (!product)
            return;
        this.name = product.name;
        this.description = product.description;
        this.category = (product.category?._id || product.category);
        this.brand = (product.brand?._id || product.brand);
        this.hashtags = product.hashtags ?? [];
    }
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => typeof value === 'string' ? value.replace(/\s+/g, ' ').trim() : value),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], ProductMetadataRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductMetadataRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductMetadataRequestValidator.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ProductMetadataRequestValidator.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Length)(0, 50, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], ProductMetadataRequestValidator.prototype, "hashtags", void 0);
class UpdateProductVariantRequestValidator extends request_validator_1.UpdateVariantRequestValidator {
    _id;
    constructor(variant) {
        super(variant);
        if (variant)
            this._id = String(variant._id ?? variant);
    }
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductVariantRequestValidator.prototype, "_id", void 0);
class UpdateProductVariantsItemRequestValidator extends request_validator_1.UpdateVariantRequestValidator {
    _id;
}
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], UpdateProductVariantsItemRequestValidator.prototype, "_id", void 0);
class UpdateProductRequestValidator extends ProductMetadataRequestValidator {
    active;
    variant;
    variants;
    constructor(product) {
        super(product);
        if (product)
            this.active = product.active;
        if (product?.variant)
            this.variant = new UpdateProductVariantRequestValidator(product.variant);
    }
}
exports.UpdateProductRequestValidator = UpdateProductRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateProductRequestValidator.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => UpdateProductVariantRequestValidator),
    __metadata("design:type", UpdateProductVariantRequestValidator)
], UpdateProductRequestValidator.prototype, "variant", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => UpdateProductVariantsItemRequestValidator),
    __metadata("design:type", Array)
], UpdateProductRequestValidator.prototype, "variants", void 0);
class CreateProductRequestValidator extends ProductMetadataRequestValidator {
    variant;
}
exports.CreateProductRequestValidator = CreateProductRequestValidator;
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => request_validator_1.CreateVariantRequestValidator),
    __metadata("design:type", request_validator_1.CreateVariantRequestValidator)
], CreateProductRequestValidator.prototype, "variant", void 0);
//# sourceMappingURL=request.validator.js.map