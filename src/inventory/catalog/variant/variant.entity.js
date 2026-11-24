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
exports.CatalogVariantEntity = exports.CatalogVariantSourcingSchema = exports.CatalogVariantSourcingEntity = exports.CatalogVariantShipsFromSchema = exports.CatalogVariantShipsFromEntity = exports.CatalogVariantPriceSchema = exports.CatalogVariantPriceEntity = exports.DEFAULT_MARKUP_BPS = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const asset_entity_1 = require("../../../assets/asset/asset.entity");
const abstract_entity_1 = require("../../../abstract.entity");
const variant_option_entity_1 = require("./variant.option.entity");
const cents = {
    min: 0,
    required: true,
    type: Number,
    validate: { validator: Number.isSafeInteger },
};
exports.DEFAULT_MARKUP_BPS = 1000;
let CatalogVariantPriceEntity = class CatalogVariantPriceEntity {
    cost;
    retail;
    markup;
};
exports.CatalogVariantPriceEntity = CatalogVariantPriceEntity;
__decorate([
    (0, mongoose_1.Prop)(cents),
    __metadata("design:type", Number)
], CatalogVariantPriceEntity.prototype, "cost", void 0);
__decorate([
    (0, mongoose_1.Prop)(cents),
    __metadata("design:type", Number)
], CatalogVariantPriceEntity.prototype, "retail", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: exports.DEFAULT_MARKUP_BPS,
        min: -10_000,
        required: true,
        type: Number,
        validate: { validator: Number.isSafeInteger },
    }),
    __metadata("design:type", Number)
], CatalogVariantPriceEntity.prototype, "markup", void 0);
exports.CatalogVariantPriceEntity = CatalogVariantPriceEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], CatalogVariantPriceEntity);
exports.CatalogVariantPriceSchema = mongoose_1.SchemaFactory.createForClass(CatalogVariantPriceEntity);
let CatalogVariantShipsFromEntity = class CatalogVariantShipsFromEntity {
    nameText;
    valueText;
    label;
    nameId;
    valueId;
};
exports.CatalogVariantShipsFromEntity = CatalogVariantShipsFromEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantShipsFromEntity.prototype, "nameText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantShipsFromEntity.prototype, "valueText", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantShipsFromEntity.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], CatalogVariantShipsFromEntity.prototype, "nameId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], CatalogVariantShipsFromEntity.prototype, "valueId", void 0);
exports.CatalogVariantShipsFromEntity = CatalogVariantShipsFromEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], CatalogVariantShipsFromEntity);
exports.CatalogVariantShipsFromSchema = mongoose_1.SchemaFactory.createForClass(CatalogVariantShipsFromEntity);
let CatalogVariantSourcingEntity = class CatalogVariantSourcingEntity {
    variantId;
    shipsFrom;
};
exports.CatalogVariantSourcingEntity = CatalogVariantSourcingEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantSourcingEntity.prototype, "variantId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.CatalogVariantShipsFromSchema }),
    __metadata("design:type", CatalogVariantShipsFromEntity)
], CatalogVariantSourcingEntity.prototype, "shipsFrom", void 0);
exports.CatalogVariantSourcingEntity = CatalogVariantSourcingEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], CatalogVariantSourcingEntity);
exports.CatalogVariantSourcingSchema = mongoose_1.SchemaFactory.createForClass(CatalogVariantSourcingEntity);
let CatalogVariantEntity = class CatalogVariantEntity extends abstract_entity_1.AbstractEntity {
    product;
    price;
    active;
    picture;
    assets = [];
    options = [];
    sourcing;
};
exports.CatalogVariantEntity = CatalogVariantEntity;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: app_schemas_1.AppSchemas.catalog.products,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Function)
], CatalogVariantEntity.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.CatalogVariantPriceSchema }),
    __metadata("design:type", CatalogVariantPriceEntity)
], CatalogVariantEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], CatalogVariantEntity.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.assets.files, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", asset_entity_1.AssetEntity)
], CatalogVariantEntity.prototype, "picture", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], ref: app_schemas_1.AppSchemas.assets.files, type: [{ type: mongoose_2.Schema.Types.ObjectId }] }),
    __metadata("design:type", Array)
], CatalogVariantEntity.prototype, "assets", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], type: [variant_option_entity_1.CatalogVariantOptionSchema] }),
    __metadata("design:type", Array)
], CatalogVariantEntity.prototype, "options", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.CatalogVariantSourcingSchema }),
    __metadata("design:type", CatalogVariantSourcingEntity)
], CatalogVariantEntity.prototype, "sourcing", void 0);
exports.CatalogVariantEntity = CatalogVariantEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogVariantEntity);
//# sourceMappingURL=variant.entity.js.map