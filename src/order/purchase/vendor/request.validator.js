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
exports.UpdatePurchaseVendorRequestValidator = exports.CreatePurchaseVendorRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class CreatePurchaseVendorRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    email;
    logo;
    phone;
    website;
    taxId;
    active;
    constructor(vendor) {
        super();
        if (!vendor) {
            return;
        }
        this.name = vendor.name;
        this.description = vendor.description;
        this.email = vendor.email;
        this.logo = vendor.logo;
        this.phone = vendor.phone;
        this.website = vendor.website;
        this.taxId = vendor.taxId;
        this.active = vendor.active;
    }
}
exports.CreatePurchaseVendorRequestValidator = CreatePurchaseVendorRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(0, 254),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreatePurchaseVendorRequestValidator.prototype, "taxId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreatePurchaseVendorRequestValidator.prototype, "active", void 0);
class UpdatePurchaseVendorRequestValidator extends CreatePurchaseVendorRequestValidator {
}
exports.UpdatePurchaseVendorRequestValidator = UpdatePurchaseVendorRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdatePurchaseVendorRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map