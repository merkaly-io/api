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
exports.SaleShippingRequestValidator = exports.SaleShippingAddressRequestValidator = exports.SaleShippingRecipientRequestValidator = exports.BRAZIL_STATES = void 0;
exports.isCpf = isCpf;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
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
const trim = ({ value }) => (typeof value === 'string' ? value.trim() : value);
const digits = ({ value }) => typeof value === 'string' ? value.replace(/\D/g, '') : value;
const upper = ({ value }) => typeof value === 'string' ? value.trim().toUpperCase() : value;
function isCpf(value) {
    if (typeof value !== 'string' || !/^\d{11}$/.test(value) || /^(\d)\1{10}$/.test(value)) {
        return false;
    }
    const digit = (length) => {
        const sum = [...value.slice(0, length)].reduce((acc, char, index) => acc + Number(char) * (length + 1 - index), 0);
        return ((sum * 10) % 11) % 10;
    };
    return digit(9) === Number(value[9]) && digit(10) === Number(value[10]);
}
function IsCpf() {
    return (0, class_validator_1.ValidateBy)({
        name: 'isCpf',
        validator: {
            defaultMessage: () => '$property must be a valid CPF',
            validate: isCpf,
        },
    });
}
class SaleShippingRecipientRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    email;
    phone;
    document;
}
exports.SaleShippingRecipientRequestValidator = SaleShippingRecipientRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingRecipientRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsEmail)(),
    (0, class_validator_1.Length)(3, 254),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim().toLowerCase() : value)),
    __metadata("design:type", String)
], SaleShippingRecipientRequestValidator.prototype, "email", void 0);
__decorate([
    (0, class_validator_1.Matches)(/^(55)?\d{10,11}$/, { message: '$property must be a Brazilian phone with area code' }),
    (0, class_transformer_1.Transform)(digits),
    __metadata("design:type", String)
], SaleShippingRecipientRequestValidator.prototype, "phone", void 0);
__decorate([
    IsCpf(),
    (0, class_transformer_1.Transform)(digits),
    __metadata("design:type", String)
], SaleShippingRecipientRequestValidator.prototype, "document", void 0);
class SaleShippingAddressRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
    country;
}
exports.SaleShippingAddressRequestValidator = SaleShippingAddressRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(digits),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 200),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "street", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(1, 20),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "number", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 120),
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "complement", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "district", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(2, 120),
    (0, class_transformer_1.Transform)(trim),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "city", void 0);
__decorate([
    (0, class_validator_1.IsIn)(exports.BRAZIL_STATES, { message: '$property must be a Brazilian UF' }),
    (0, class_transformer_1.Transform)(upper),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "state", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(upper),
    __metadata("design:type", String)
], SaleShippingAddressRequestValidator.prototype, "country", void 0);
class SaleShippingRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    recipient = new SaleShippingRecipientRequestValidator();
    address = new SaleShippingAddressRequestValidator();
    constructor(shipping) {
        super();
        if (!shipping) {
            return;
        }
        Object.assign(this.recipient, shipping.recipient);
        Object.assign(this.address, shipping.address);
    }
}
exports.SaleShippingRequestValidator = SaleShippingRequestValidator;
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => SaleShippingRecipientRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], SaleShippingRequestValidator.prototype, "recipient", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => SaleShippingAddressRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], SaleShippingRequestValidator.prototype, "address", void 0);
//# sourceMappingURL=shipping.request.validator.js.map