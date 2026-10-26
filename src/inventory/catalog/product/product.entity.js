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
const app_schemas_1 = require("../../../app.schemas");
const asset_entity_1 = require("../../../assets/asset/asset.entity");
const abstract_entity_1 = require("../../../abstract.entity");
let CatalogProductEntity = class CatalogProductEntity extends abstract_entity_1.AbstractEntity {
    sku;
    name;
    description;
    price;
    cost;
    category;
    brand;
    attributes;
    hashtags;
    picture;
    pictures;
    variants;
};
exports.CatalogProductEntity = CatalogProductEntity;
__decorate([
    (0, mongoose_1.Prop)({ trim: true }),
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
exports.CatalogProductEntity = CatalogProductEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogProductEntity);
//# sourceMappingURL=product.entity.js.map