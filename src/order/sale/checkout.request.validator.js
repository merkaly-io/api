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
exports.CreateCheckoutRequestValidator = exports.CheckoutItemRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
const shipping_request_validator_1 = require("./shipping.request.validator");
class CheckoutItemRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    product;
    variant;
    quantity = 1;
}
exports.CheckoutItemRequestValidator = CheckoutItemRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CheckoutItemRequestValidator.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], CheckoutItemRequestValidator.prototype, "variant", void 0);
__decorate([
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.Min)(1),
    (0, class_validator_1.Max)(99),
    __metadata("design:type", Object)
], CheckoutItemRequestValidator.prototype, "quantity", void 0);
class CreateCheckoutRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    items = [];
    shipping = new shipping_request_validator_1.SaleShippingRequestValidator();
    notes;
}
exports.CreateCheckoutRequestValidator = CreateCheckoutRequestValidator;
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ArrayMaxSize)(50),
    (0, class_transformer_1.Type)(() => CheckoutItemRequestValidator),
    (0, class_validator_1.ValidateNested)({ each: true }),
    __metadata("design:type", Array)
], CreateCheckoutRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsDefined)(),
    (0, class_transformer_1.Type)(() => shipping_request_validator_1.SaleShippingRequestValidator),
    (0, class_validator_1.ValidateNested)(),
    __metadata("design:type", Object)
], CreateCheckoutRequestValidator.prototype, "shipping", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCheckoutRequestValidator.prototype, "notes", void 0);
//# sourceMappingURL=checkout.request.validator.js.map