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
exports.UpdateProductRequestValidator = exports.CreateProductRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class CreateProductRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    sku;
    description;
    sellPrice;
    buyPrice;
    pictures = [];
    category;
    brand;
    hashtags = [];
    constructor(product) {
        super();
        if (!product) {
            return;
        }
        this.name = product.name;
        this.sku = product.sku;
        this.description = product.description;
        this.sellPrice = product.sellPrice;
        this.buyPrice = product.buyPrice;
        this.category = (product.category?._id || product.category);
        this.brand = (product.brand?._id || product.brand);
        this.hashtags = product.hashtags ?? [];
        this.pictures =
            product.pictures?.map((picture) => (picture?._id || picture)) ?? this.pictures;
    }
}
exports.CreateProductRequestValidator = CreateProductRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateProductRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 50),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductRequestValidator.prototype, "sku", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProductRequestValidator.prototype, "sellPrice", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateProductRequestValidator.prototype, "buyPrice", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductRequestValidator.prototype, "pictures", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductRequestValidator.prototype, "category", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateProductRequestValidator.prototype, "brand", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Length)(0, 50, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateProductRequestValidator.prototype, "hashtags", void 0);
class UpdateProductRequestValidator extends CreateProductRequestValidator {
}
exports.UpdateProductRequestValidator = UpdateProductRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateProductRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map