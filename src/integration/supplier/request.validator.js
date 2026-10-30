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
exports.ImportSupplierProductRequestValidator = exports.PreviewSupplierProductRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
class PreviewSupplierProductRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    url;
}
exports.PreviewSupplierProductRequestValidator = PreviewSupplierProductRequestValidator;
__decorate([
    (0, class_validator_1.IsUrl)({ require_protocol: true }),
    (0, class_validator_1.Length)(0, 2048),
    __metadata("design:type", String)
], PreviewSupplierProductRequestValidator.prototype, "url", void 0);
class ImportSupplierProductRequestValidator extends PreviewSupplierProductRequestValidator {
    markup;
}
exports.ImportSupplierProductRequestValidator = ImportSupplierProductRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.IsNumber)({ allowNaN: false, allowInfinity: false, maxDecimalPlaces: 2 }),
    (0, class_validator_1.Min)(0),
    (0, class_validator_1.Max)(1000),
    __metadata("design:type", Number)
], ImportSupplierProductRequestValidator.prototype, "markup", void 0);
//# sourceMappingURL=request.validator.js.map