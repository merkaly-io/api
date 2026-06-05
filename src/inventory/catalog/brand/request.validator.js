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
exports.UpdateBrandRequestValidator = exports.CreateBrandRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class CreateBrandRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    constructor(brand) {
        super();
        if (!brand) {
            return;
        }
        this.name = brand.name;
        this.description = brand.description;
    }
}
exports.CreateBrandRequestValidator = CreateBrandRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateBrandRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateBrandRequestValidator.prototype, "description", void 0);
class UpdateBrandRequestValidator extends CreateBrandRequestValidator {
}
exports.UpdateBrandRequestValidator = UpdateBrandRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateBrandRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map