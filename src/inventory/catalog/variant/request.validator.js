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
exports.CreateVariantRequestValidator = exports.UpdateVariantRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class UpdateVariantRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    retailPrice;
    active;
    constructor(variant) {
        super();
        if (!variant)
            return;
        this.retailPrice = variant.retailPrice;
        this.active = variant.active;
    }
}
exports.UpdateVariantRequestValidator = UpdateVariantRequestValidator;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], UpdateVariantRequestValidator.prototype, "retailPrice", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateVariantRequestValidator.prototype, "active", void 0);
class CreateVariantRequestValidator extends UpdateVariantRequestValidator {
    supplierPrice;
    constructor(variant) {
        super(variant);
        if (variant)
            this.supplierPrice = variant.supplierPrice;
    }
}
exports.CreateVariantRequestValidator = CreateVariantRequestValidator;
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    __metadata("design:type", Number)
], CreateVariantRequestValidator.prototype, "supplierPrice", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(Number.MAX_SAFE_INTEGER),
    __metadata("design:type", Number)
], CreateVariantRequestValidator.prototype, "retailPrice", void 0);
//# sourceMappingURL=request.validator.js.map