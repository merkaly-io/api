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
exports.UpdateCollectionRequestValidator = exports.CreateCollectionRequestValidator = void 0;
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../abstract.validator");
class CreateCollectionRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    products = [];
    constructor(collection) {
        super();
        if (!collection) {
            return;
        }
        this.name = collection.name;
        this.description = collection.description;
        this.products =
            collection.products?.map((product) => (product?._id || product)) ?? [];
    }
}
exports.CreateCollectionRequestValidator = CreateCollectionRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateCollectionRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateCollectionRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)({ each: true }),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], CreateCollectionRequestValidator.prototype, "products", void 0);
class UpdateCollectionRequestValidator extends CreateCollectionRequestValidator {
}
exports.UpdateCollectionRequestValidator = UpdateCollectionRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateCollectionRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map