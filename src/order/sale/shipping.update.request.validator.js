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
exports.UpdateSaleShippingRequestValidator = exports.UpdateSaleShippingAddressRequestValidator = exports.UpdateSaleShippingRecipientRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const shipping_request_validator_1 = require("./shipping.request.validator");
const Sent = () => (0, class_validator_1.ValidateIf)((_, value) => value !== undefined);
const optionalText = ({ value }) => {
    if (value === null)
        return null;
    if (typeof value !== 'string')
        return value;
    return value.trim() || null;
};
class UpdateSaleShippingRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    phone;
    document;
    birthday;
}
exports.UpdateSaleShippingRecipientRequestValidator = UpdateSaleShippingRecipientRequestValidator;
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingRecipientRequestValidator.prototype, "name", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value)),
    __metadata("design:type", String)
], UpdateSaleShippingRecipientRequestValidator.prototype, "email", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.Matches)(/^(55)?\d{10,11}$/, { message: '$property must be a Brazilian phone with area code' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleShippingRecipientRequestValidator.prototype, "phone", void 0);
__decorate([
    Sent(),
    (0, shipping_request_validator_1.IsCpf)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleShippingRecipientRequestValidator.prototype, "document", void 0);
__decorate([
    Sent(),
    (0, shipping_request_validator_1.IsBirthday)(),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingRecipientRequestValidator.prototype, "birthday", void 0);
class UpdateSaleShippingAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
}
exports.UpdateSaleShippingAddressRequestValidator = UpdateSaleShippingAddressRequestValidator;
__decorate([
    Sent(),
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "street", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(optionalText),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "district", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "city", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsIn)(shipping_request_validator_1.BRAZIL_STATES, { message: '$property must be a Brazilian UF' }),
    (0, class_transformer_1.Transform)(shipping_request_validator_1.upper),
    __metadata("design:type", String)
], UpdateSaleShippingAddressRequestValidator.prototype, "state", void 0);
class UpdateSaleShippingRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    recipient;
    address;
    updateCustomer;
}
exports.UpdateSaleShippingRequestValidator = UpdateSaleShippingRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => UpdateSaleShippingRecipientRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", UpdateSaleShippingRecipientRequestValidator)
], UpdateSaleShippingRequestValidator.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => UpdateSaleShippingAddressRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", UpdateSaleShippingAddressRequestValidator)
], UpdateSaleShippingRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateSaleShippingRequestValidator.prototype, "updateCustomer", void 0);
//# sourceMappingURL=shipping.update.request.validator.js.map