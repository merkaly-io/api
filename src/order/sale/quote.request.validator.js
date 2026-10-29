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
exports.CheckoutQuoteRequestValidator = exports.CheckoutQuoteDestinationRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const checkout_request_validator_1 = require("./checkout.request.validator");
class CheckoutQuoteDestinationRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    postalCode;
    country;
}
exports.CheckoutQuoteDestinationRequestValidator = CheckoutQuoteDestinationRequestValidator;
__decorate([
    (0, class_validator_1.Matches)(/^\d{8}$/, { message: '$property must be a CEP with 8 digits' }),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.replace(/\D/g, '') : value)),
    __metadata("design:type", String)
], CheckoutQuoteDestinationRequestValidator.prototype, "postalCode", void 0);
__decorate([
    (0, class_validator_1.IsISO31661Alpha2)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_transformer_1.Transform)(({ value }) => (typeof value === 'string' ? value.trim().toUpperCase() : value)),
    __metadata("design:type", String)
], CheckoutQuoteDestinationRequestValidator.prototype, "country", void 0);
class CheckoutQuoteRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    items = [];
    destination = new CheckoutQuoteDestinationRequestValidator();
}
exports.CheckoutQuoteRequestValidator = CheckoutQuoteRequestValidator;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ArrayMaxSize)(50),
    (0, class_transformer_1.Type)(() => checkout_request_validator_1.CheckoutItemRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CheckoutQuoteRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => CheckoutQuoteDestinationRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], CheckoutQuoteRequestValidator.prototype, "destination", void 0);
//# sourceMappingURL=quote.request.validator.js.map