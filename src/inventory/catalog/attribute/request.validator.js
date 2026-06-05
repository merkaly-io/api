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
exports.UpdateAttributeRequestValidator = exports.CreateAttributeRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class CreateAttributeRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    values = [];
    active;
    constructor(attribute) {
        super();
        if (!attribute) {
            return;
        }
        this.name = attribute.name;
        this.active = attribute.active;
        if (attribute.values !== undefined) {
            this.values = attribute.values;
        }
    }
}
exports.CreateAttributeRequestValidator = CreateAttributeRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateAttributeRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.IsString)({ each: true }),
    (0, class_validator_1.Length)(0, 100, { each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateAttributeRequestValidator.prototype, "values", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateAttributeRequestValidator.prototype, "active", void 0);
class UpdateAttributeRequestValidator extends CreateAttributeRequestValidator {
}
exports.UpdateAttributeRequestValidator = UpdateAttributeRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAttributeRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map