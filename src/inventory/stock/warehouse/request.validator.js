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
exports.UpdateStockWarehouseRequestValidator = exports.CreateStockWarehouseRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const abstract_validator_1 = require("../../../../../infrastructure/abstracts/abstract.validator");
const address_validator_1 = require("../../../../../infrastructure/validators/address.validator");
class CreateStockWarehouseRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    name;
    description;
    address;
    isDefault;
    active;
    constructor(warehouse) {
        super();
        if (!warehouse) {
            return;
        }
        this.name = warehouse.name;
        this.description = warehouse.description;
        this.isDefault = warehouse.isDefault;
        this.active = warehouse.active;
        const address = warehouse.address;
        const location = address?.location;
        this.address = address
            ? Object.assign(new address_validator_1.AddressValidator(), {
                line1: address.line1,
                line2: address.line2,
                name: address.name,
                city: address.city,
                state: address.state,
                locality: address.locality,
                country: address.country,
                code: address.code,
                latitude: location?.lat,
                longitude: location?.lng,
            })
            : undefined;
    }
}
exports.CreateStockWarehouseRequestValidator = CreateStockWarehouseRequestValidator;
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_validator_1.Length)(0, 100),
    __metadata("design:type", String)
], CreateStockWarehouseRequestValidator.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 1000),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStockWarehouseRequestValidator.prototype, "description", void 0);
__decorate([
    (0, class_validator_1.IsNotEmptyObject)({}, { message: 'Address is required' }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => address_validator_1.AddressValidator),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", address_validator_1.AddressValidator)
], CreateStockWarehouseRequestValidator.prototype, "address", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateStockWarehouseRequestValidator.prototype, "isDefault", void 0);
__decorate([
    (0, class_validator_1.IsBoolean)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Boolean)
], CreateStockWarehouseRequestValidator.prototype, "active", void 0);
class UpdateStockWarehouseRequestValidator extends CreateStockWarehouseRequestValidator {
}
exports.UpdateStockWarehouseRequestValidator = UpdateStockWarehouseRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStockWarehouseRequestValidator.prototype, "name", void 0);
//# sourceMappingURL=request.validator.js.map