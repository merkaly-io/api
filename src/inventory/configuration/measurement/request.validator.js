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
exports.UpdateConfigurationMeasurementRequestValidator = exports.CreateConfigurationMeasurementRequestValidator = exports.ConfigurationUnitRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class ConfigurationUnitRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    active;
    description;
    isBaseUnit;
    name;
    symbol;
    constructor(unit) {
        super();
        if (!unit) {
            return;
        }
        this.active = unit.active;
        this.description = unit.description;
        this.isBaseUnit = unit.isBaseUnit;
        this.name = unit.name;
        this.symbol = unit.symbol;
    }
}
exports.ConfigurationUnitRequestValidator = ConfigurationUnitRequestValidator;
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ConfigurationUnitRequestValidator.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ConfigurationUnitRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], ConfigurationUnitRequestValidator.prototype, "isBaseUnit", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], ConfigurationUnitRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 20),
    __metadata("design:type", String)
], ConfigurationUnitRequestValidator.prototype, "symbol", void 0);
class CreateConfigurationMeasurementRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    active;
    units = [];
    constructor(measurement) {
        super();
        if (!measurement) {
            return;
        }
        this.name = measurement.name;
        this.description = measurement.description;
        this.active = measurement.active;
        this.units =
            measurement.units?.map((unit) => new ConfigurationUnitRequestValidator(unit)) ?? [];
    }
}
exports.CreateConfigurationMeasurementRequestValidator = CreateConfigurationMeasurementRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateConfigurationMeasurementRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateConfigurationMeasurementRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateConfigurationMeasurementRequestValidator.prototype, "active", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => ConfigurationUnitRequestValidator),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateConfigurationMeasurementRequestValidator.prototype, "units", void 0);
class UpdateConfigurationMeasurementRequestValidator extends CreateConfigurationMeasurementRequestValidator {
}
exports.UpdateConfigurationMeasurementRequestValidator = UpdateConfigurationMeasurementRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateConfigurationMeasurementRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map