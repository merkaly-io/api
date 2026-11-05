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
exports.UnlinkIdentityRequestValidator = exports.LinkIdentityRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../abstract.validator");
class LinkIdentityRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    idToken;
}
exports.LinkIdentityRequestValidator = LinkIdentityRequestValidator;
__decorate([
    (0, class_validator_1.IsJWT)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 8192),
    __metadata("design:type", String)
], LinkIdentityRequestValidator.prototype, "idToken", void 0);
class UnlinkIdentityRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    provider;
    userId;
}
exports.UnlinkIdentityRequestValidator = UnlinkIdentityRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], UnlinkIdentityRequestValidator.prototype, "provider", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 255),
    __metadata("design:type", String)
], UnlinkIdentityRequestValidator.prototype, "userId", void 0);
//# sourceMappingURL=request.validator.js.map