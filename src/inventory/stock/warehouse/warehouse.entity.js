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
exports.StockWarehouseEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
const address_entity_1 = require("../../../../infrastructure/entities/address.entity");
let StockWarehouseEntity = class StockWarehouseEntity extends abstract_entity_1.AbstractEntity {
    name;
    code;
    description;
    address;
    isDefault;
    active;
};
exports.StockWarehouseEntity = StockWarehouseEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, unique: true }),
    __metadata("design:type", String)
], StockWarehouseEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ sparse: true, trim: true, unique: true }),
    __metadata("design:type", String)
], StockWarehouseEntity.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], StockWarehouseEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, type: address_entity_1.AddressEntity }),
    __metadata("design:type", Object)
], StockWarehouseEntity.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], StockWarehouseEntity.prototype, "isDefault", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], StockWarehouseEntity.prototype, "active", void 0);
exports.StockWarehouseEntity = StockWarehouseEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], StockWarehouseEntity);
//# sourceMappingURL=warehouse.entity.js.map