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
exports.SearchBuyerOrdersRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const fulfillment_enum_1 = require("./fulfillment.enum");
const abstract_validator_1 = require("../../abstract.validator");
class SearchBuyerOrdersRequestValidator extends abstract_validator_1.SearchValidator {
    stage;
}
exports.SearchBuyerOrdersRequestValidator = SearchBuyerOrdersRequestValidator;
__decorate([
    (0, class_validator_1.IsEnum)(fulfillment_enum_1.OrderBuyerStageEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], SearchBuyerOrdersRequestValidator.prototype, "stage", void 0);
//# sourceMappingURL=search.request.validator.js.map