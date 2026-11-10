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
exports.SaleDeliveryRequestValidator = exports.SaleDeliveryAddressRequestValidator = exports.SaleDeliveryRecipientRequestValidator = exports.FULL_NAME_MESSAGE = exports.BRAZIL_STATES = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const person_validator_1 = require("../../person.validator");
const transform_validator_1 = require("../../transform.validator");
exports.BRAZIL_STATES = [
    'AC',
    'AL',
    'AM',
    'AP',
    'BA',
    'CE',
    'DF',
    'ES',
    'GO',
    'MA',
    'MG',
    'MS',
    'MT',
    'PA',
    'PB',
    'PE',
    'PI',
    'PR',
    'RJ',
    'RN',
    'RO',
    'RR',
    'RS',
    'SC',
    'SE',
    'SP',
    'TO',
];
function BirthdayForBrazil() {
    return (0, class_validator_1.ValidateBy)({
        name: 'birthdayForBrazil',
        validator: {
            defaultMessage: () => 'recipient.birthday is required for deliveries to Brazil',
            validate: (recipient, args) => {
                const { address } = args.object;
                return address?.country !== 'BR' || Boolean(recipient?.birthday);
            },
        },
    });
}
exports.FULL_NAME_MESSAGE = 'recipient.name must be the full name as registered in the CPF';
function FullNameForBrazil() {
    return (0, class_validator_1.ValidateBy)({
        name: 'fullNameForBrazil',
        validator: {
            defaultMessage: () => exports.FULL_NAME_MESSAGE,
            validate: (recipient, args) => {
                const { address } = args.object;
                return address?.country !== 'BR' || (0, person_validator_1.isFullName)(recipient?.name);
            },
        },
    });
}
class SaleDeliveryRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    phone;
    document;
    birthday;
}
exports.SaleDeliveryRecipientRequestValidator = SaleDeliveryRecipientRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryRecipientRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value)),
    __metadata("design:type", String)
], SaleDeliveryRecipientRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(55)?\d{10,11}$/, { message: '$property must be a Brazilian phone with area code' }),
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], SaleDeliveryRecipientRequestValidator.prototype, "phone", void 0);
__decorate([
    (0, person_validator_1.IsCpf)(),
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], SaleDeliveryRecipientRequestValidator.prototype, "document", void 0);
__decorate([
    (0, person_validator_1.IsBirthday)(),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryRecipientRequestValidator.prototype, "birthday", void 0);
class SaleDeliveryAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
    country;
}
exports.SaleDeliveryAddressRequestValidator = SaleDeliveryAddressRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(transform_validator_1.digits),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(transform_validator_1.trim),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.BRAZIL_STATES, { message: '$property must be a Brazilian UF' }),
    (0, class_transformer_1.Transform)(transform_validator_1.upper),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(transform_validator_1.upper),
    __metadata("design:type", String)
], SaleDeliveryAddressRequestValidator.prototype, "country", void 0);
class SaleDeliveryRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    recipient = new SaleDeliveryRecipientRequestValidator();
    address = new SaleDeliveryAddressRequestValidator();
    constructor(delivery) {
        super();
        if (!delivery) {
            return;
        }
        Object.assign(this.recipient, delivery.recipient);
        Object.assign(this.address, delivery.address);
    }
}
exports.SaleDeliveryRequestValidator = SaleDeliveryRequestValidator;
__decorate([
    (0, class_validator_1.IsDefined)(),
    BirthdayForBrazil(),
    FullNameForBrazil(),
    (0, class_transformer_1.Type)(() => SaleDeliveryRecipientRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], SaleDeliveryRequestValidator.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => SaleDeliveryAddressRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], SaleDeliveryRequestValidator.prototype, "address", void 0);
//# sourceMappingURL=delivery.request.validator.js.map