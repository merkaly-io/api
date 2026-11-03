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
exports.UpdateSaleDeliveryRequestValidator = exports.UpdateSaleDeliveryAddressRequestValidator = exports.UpdateSaleDeliveryRecipientRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const delivery_request_validator_1 = require("./delivery.request.validator");
const Sent = () => (0, class_validator_1.ValidateIf)((_, value) => value !== undefined);
const optionalText = ({ value }) => {
    if (value === null)
        return null;
    if (typeof value !== 'string')
        return value;
    return value.trim() || null;
};
class UpdateSaleDeliveryRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    phone;
    document;
    birthday;
}
exports.UpdateSaleDeliveryRecipientRequestValidator = UpdateSaleDeliveryRecipientRequestValidator;
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryRecipientRequestValidator.prototype, "name", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value)),
    __metadata("design:type", String)
], UpdateSaleDeliveryRecipientRequestValidator.prototype, "email", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.Matches)(/^(55)?\d{10,11}$/, { message: '$property must be a Brazilian phone with area code' }),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleDeliveryRecipientRequestValidator.prototype, "phone", void 0);
__decorate([
    Sent(),
    (0, delivery_request_validator_1.IsCpf)(),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleDeliveryRecipientRequestValidator.prototype, "document", void 0);
__decorate([
    Sent(),
    (0, delivery_request_validator_1.IsBirthday)(),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryRecipientRequestValidator.prototype, "birthday", void 0);
class UpdateSaleDeliveryAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
}
exports.UpdateSaleDeliveryAddressRequestValidator = UpdateSaleDeliveryAddressRequestValidator;
__decorate([
    Sent(),
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.digits),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "street", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(optionalText),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "district", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.trim),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "city", void 0);
__decorate([
    Sent(),
    (0, class_validator_1.IsIn)(delivery_request_validator_1.BRAZIL_STATES, { message: '$property must be a Brazilian UF' }),
    (0, class_transformer_1.Transform)(delivery_request_validator_1.upper),
    __metadata("design:type", String)
], UpdateSaleDeliveryAddressRequestValidator.prototype, "state", void 0);
class UpdateSaleDeliveryRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    recipient;
    address;
    updateCustomer;
}
exports.UpdateSaleDeliveryRequestValidator = UpdateSaleDeliveryRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => UpdateSaleDeliveryRecipientRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", UpdateSaleDeliveryRecipientRequestValidator)
], UpdateSaleDeliveryRequestValidator.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Type)(() => UpdateSaleDeliveryAddressRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", UpdateSaleDeliveryAddressRequestValidator)
], UpdateSaleDeliveryRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], UpdateSaleDeliveryRequestValidator.prototype, "updateCustomer", void 0);
//# sourceMappingURL=delivery.update.request.validator.js.map