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
exports.UpdateAddressRequestValidator = exports.CreateAddressRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../infrastructure/abstracts/abstract.validator");
class CreateAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    street;
    name;
    complement;
    country;
    code;
    longitude;
    latitude;
    constructor(address) {
        super();
        if (!address) {
            return;
        }
        this.street = address.line1;
        this.name = address.name;
        this.complement = address.line2;
        this.country = address.country;
        this.code = address.code;
        this.longitude = address.location?.lng;
        this.latitude = address.location?.lat;
    }
}
exports.CreateAddressRequestValidator = CreateAddressRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    __metadata("design:type", String)
], CreateAddressRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAddressRequestValidator.prototype, "country", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateAddressRequestValidator.prototype, "code", void 0);
__decorate([
    (0, class_validator_1.IsLongitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAddressRequestValidator.prototype, "longitude", void 0);
__decorate([
    (0, class_validator_1.IsLatitude)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], CreateAddressRequestValidator.prototype, "latitude", void 0);
class UpdateAddressRequestValidator extends CreateAddressRequestValidator {
}
exports.UpdateAddressRequestValidator = UpdateAddressRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateAddressRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map