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
exports.UpdateSaleCustomerRequestValidator = exports.CreateSaleCustomerRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const customer_enum_1 = require("../../enums/customer.enum");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
class CreateSaleCustomerRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    type = customer_enum_1.SaleCustomerTypeEnum.B2C;
    description;
    email;
    logo;
    phone;
    website;
    taxId;
    active;
    constructor(customer) {
        super();
        if (!customer) {
            return;
        }
        this.name = customer.name;
        this.description = customer.description;
        this.email = customer.email;
        this.logo = customer.logo;
        this.phone = customer.phone;
        this.website = customer.website;
        this.taxId = customer.taxId;
        this.active = customer.active;
        if (customer.type !== undefined) {
            this.type = customer.type;
        }
    }
}
exports.CreateSaleCustomerRequestValidator = CreateSaleCustomerRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(customer_enum_1.SaleCustomerTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(0, 254),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.email),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.logo),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateSaleCustomerRequestValidator.prototype, "taxId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateSaleCustomerRequestValidator.prototype, "active", void 0);
class UpdateSaleCustomerRequestValidator extends CreateSaleCustomerRequestValidator {
}
exports.UpdateSaleCustomerRequestValidator = UpdateSaleCustomerRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateSaleCustomerRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map