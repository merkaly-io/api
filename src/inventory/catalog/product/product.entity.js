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
exports.CatalogProductEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../../app.schemas");
const asset_entity_1 = require("../../../assets/entities/asset.entity");
const balance_entity_1 = require("../../stock/entities/balance.entity");
const balance_status_enum_1 = require("../../stock/enums/balance.status.enum");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
let CatalogProductEntity = class CatalogProductEntity extends abstract_entity_1.AbstractEntity {
    sku;
    name;
    description;
    price;
    cost;
    category;
    brand;
    attributes;
    measure;
    hashtags;
    picture;
    pictures;
    variants;
    stock;
    status;
    balance;
    balances;
    'measure.selected';
};
exports.CatalogProductEntity = CatalogProductEntity;
__decorate([
    (0, mongoose_1.Prop)({ trim: true, unique: true, sparse: true }),
    __metadata("design:type", String)
], CatalogProductEntity.prototype, "sku", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], CatalogProductEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true }),
    __metadata("design:type", String)
], CatalogProductEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        alias: 'sellPrice',
        default: 0,
        min: 0,
        type: Number,
        validate: { validator: Number.isInteger },
    }),
    __metadata("design:type", Number)
], CatalogProductEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        alias: 'buyPrice',
        default: 0,
        min: 0,
        type: Number,
        validate: { validator: Number.isInteger },
    }),
    __metadata("design:type", Number)
], CatalogProductEntity.prototype, "cost", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.catalog.categories,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "category", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.catalog.brands,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        _id: false,
        default: [],
        type: [
            {
                type: {
                    ref: app_schemas_1.AppSchemas.inventory.catalog.attributes,
                    required: true,
                    type: mongoose_2.Schema.Types.ObjectId,
                },
                values: { type: [String], default: [] },
            },
        ],
    }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "attributes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        _id: false,
        default: () => ({}),
        type: {
            amount: { default: null, min: 0, type: Number },
            kind: {
                default: null,
                ref: app_schemas_1.AppSchemas.inventory.configuration.measurements,
                type: mongoose_2.Schema.Types.ObjectId,
            },
            unit: { default: null, type: mongoose_2.Schema.Types.ObjectId },
        },
    }),
    __metadata("design:type", Object)
], CatalogProductEntity.prototype, "measure", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "hashtags", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.pictures?.at(0);
        },
    }),
    __metadata("design:type", asset_entity_1.AssetEntity)
], CatalogProductEntity.prototype, "picture", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const variants = this.get('variants') ?? [];
            return variants.reduce((pool, variant) => {
                pool.push(...variant.pictures);
                return pool;
            }, []);
        },
    }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "pictures", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'product',
            localField: '_id',
            ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        },
    }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "variants", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const variants = this.get('variants') ?? [];
            if (!variants.length) {
                return balance_status_enum_1.StockBalanceStatusEnum.NOT_CONFIGURED;
            }
            const statuses = variants.map((variant) => variant.status);
            if (statuses.some((status) => status === balance_status_enum_1.StockBalanceStatusEnum.OUT_STOCK)) {
                return balance_status_enum_1.StockBalanceStatusEnum.OUT_STOCK;
            }
            if (statuses.some((status) => status === balance_status_enum_1.StockBalanceStatusEnum.LOW_STOCK)) {
                return balance_status_enum_1.StockBalanceStatusEnum.LOW_STOCK;
            }
            if (statuses.every((status) => status === balance_status_enum_1.StockBalanceStatusEnum.NOT_CONFIGURED)) {
                return balance_status_enum_1.StockBalanceStatusEnum.NOT_CONFIGURED;
            }
            return balance_status_enum_1.StockBalanceStatusEnum.HEALTHY;
        },
    }),
    __metadata("design:type", String)
], CatalogProductEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const balances = this.balances || [];
            const emptyBalance = {
                available: 0,
                expected: 0,
                incoming: 0,
                projected: 0,
                reserved: 0,
                stock: 0,
            };
            return balances.reduce((acc, balance) => {
                acc.reserved += balance.reserved;
                acc.stock += balance.stock;
                acc.incoming += balance.incoming;
                acc.available += balance.available;
                acc.expected += balance.expected;
                acc.projected += balance.projected;
                return acc;
            }, emptyBalance);
        },
    }),
    __metadata("design:type", balance_entity_1.StockBalanceEntity)
], CatalogProductEntity.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'product',
            localField: '_id',
            ref: app_schemas_1.AppSchemas.inventory.stock.balances,
        },
    }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "balances", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const measure = this.measure;
            const units = measure?.kind?.units ?? [];
            const unitId = measure?.unit;
            if (!unitId || !Array.isArray(units)) {
                return null;
            }
            return units.find((unit) => unit?._id?.toString() === unitId.toString()) ?? null;
        },
    }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "measure.selected", void 0);
exports.CatalogProductEntity = CatalogProductEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogProductEntity);
//# sourceMappingURL=product.entity.js.map