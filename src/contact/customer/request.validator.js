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
exports.UpdateContactCustomerRequestValidator = exports.CreateContactCustomerRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const customer_enum_1 = require("./customer.enum");
const abstract_validator_1 = require("../../abstract.validator");
class CreateContactCustomerRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    type = customer_enum_1.ContactCustomerTypeEnum.B2C;
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
exports.CreateContactCustomerRequestValidator = CreateContactCustomerRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(customer_enum_1.ContactCustomerTypeEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "type", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(0, 254),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.email),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.IsUrl)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    (0, class_validator_1.ValidateIf)((o) => o.logo),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "logo", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 2048),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "website", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 20),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateContactCustomerRequestValidator.prototype, "taxId", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateContactCustomerRequestValidator.prototype, "active", void 0);
class UpdateContactCustomerRequestValidator extends CreateContactCustomerRequestValidator {
}
exports.UpdateContactCustomerRequestValidator = UpdateContactCustomerRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateContactCustomerRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map