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
exports.UpdateCategoryRequestValidator = exports.CreateCategoryRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class CreateCategoryRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    constructor(category) {
        super();
        if (!category) {
            return;
        }
        this.name = category.name;
        this.description = category.description;
    }
}
exports.CreateCategoryRequestValidator = CreateCategoryRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateCategoryRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCategoryRequestValidator.prototype, "description", void 0);
class UpdateCategoryRequestValidator extends CreateCategoryRequestValidator {
}
exports.UpdateCategoryRequestValidator = UpdateCategoryRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCategoryRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map