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
    active;
    supplier;
    vendor;
    externalProductId;
    variant;
    supplierPrice;
    retailPrice;
    category;
    brand;
    hashtags;
    picture;
    assets;
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
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], CatalogProductEntity.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.integration.suppliers, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "supplier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.contact.vendors, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "vendor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogProductEntity.prototype, "externalProductId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Function)
], CatalogProductEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.variant?.supplierPrice;
        },
    }),
    __metadata("design:type", Number)
], CatalogProductEntity.prototype, "supplierPrice", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.variant?.retailPrice;
        },
    }),
    __metadata("design:type", Number)
], CatalogProductEntity.prototype, "retailPrice", void 0);
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
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "hashtags", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.variant?.picture;
        },
    }),
    __metadata("design:type", asset_entity_1.AssetEntity)
], CatalogProductEntity.prototype, "picture", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const assets = [this.variant, ...(this.variants ?? [])]
                .flatMap((variant) => variant?.assets ?? [])
                .filter((asset) => asset && !(asset instanceof mongoose_2.Types.ObjectId));
            const seen = new Set();
            return assets.filter((asset) => {
                const id = String(asset._id);
                if (seen.has(id))
                    return false;
                seen.add(id);
                return true;
            });
        },
    }),
    __metadata("design:type", Array)
], CatalogProductEntity.prototype, "assets", void 0);
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