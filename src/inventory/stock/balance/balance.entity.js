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
exports.StockBalanceEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const class_validator_1 = require("class-validator");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const product_entity_1 = require("../../catalog/product/product.entity");
const variant_entity_1 = require("../../catalog/variant/variant.entity");
const warehouse_entity_1 = require("../warehouse/warehouse.entity");
const abstract_entity_1 = require("../../../abstract.entity");
let StockBalanceEntity = class StockBalanceEntity extends abstract_entity_1.AbstractEntity {
    warehouse;
    variant;
    product;
    stock;
    reserved;
    incoming;
    available;
    expected;
    projected;
};
exports.StockBalanceEntity = StockBalanceEntity;
__decorate([
    (0, mongoose_1.Prop)({
        immutable: true,
        ref: app_schemas_1.AppSchemas.inventory.stock.warehouses,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", warehouse_entity_1.StockWarehouseEntity)
], StockBalanceEntity.prototype, "warehouse", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        immutable: true,
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", variant_entity_1.CatalogVariantEntity)
], StockBalanceEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        immutable: true,
        ref: app_schemas_1.AppSchemas.inventory.catalog.products,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", product_entity_1.CatalogProductEntity)
], StockBalanceEntity.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
        min: 0,
        type: Number,
        validate: {
            validator: (v) => (0, class_validator_1.min)(v, 0),
            message: 'Stock values cannot be negative',
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "stock", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
        min: 0,
        type: Number,
        validate: {
            validator: (v) => (0, class_validator_1.min)(v, 0),
            message: 'Reserved stock values cannot be negative',
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "reserved", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: 0,
        min: 0,
        type: Number,
        validate: {
            validator: (v) => (0, class_validator_1.min)(v, 0),
            message: 'Incoming Stock values cannot be negative',
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "incoming", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return Math.max((this.stock ?? 0) - (this.reserved ?? 0), 0);
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "available", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return (this.stock ?? 0) + (this.incoming ?? 0);
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "expected", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return Math.max((this.expected ?? 0) - (this.reserved ?? 0), 0);
        },
    }),
    __metadata("design:type", Number)
], StockBalanceEntity.prototype, "projected", void 0);
exports.StockBalanceEntity = StockBalanceEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], StockBalanceEntity);
//# sourceMappingURL=balance.entity.js.map