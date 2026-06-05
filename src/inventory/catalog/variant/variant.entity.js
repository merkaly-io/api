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
exports.CatalogVariantEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const asset_entity_1 = require("../../../assets/asset/asset.entity");
const balance_status_enum_1 = require("../../stock/balance/balance.status.enum");
const abstract_entity_1 = require("../../../abstract.entity");
const variant_identifier_entity_1 = require("./variant.identifier.entity");
const variant_policy_entity_1 = require("./variant.policy.entity");
let CatalogVariantEntity = class CatalogVariantEntity extends abstract_entity_1.AbstractEntity {
    product;
    price;
    policy;
    identifier;
    options = [];
    active;
    pictures = [];
    picture;
    total;
    stock;
    status;
    balance;
    balances;
};
exports.CatalogVariantEntity = CatalogVariantEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.inventory.catalog.products, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], CatalogVariantEntity.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, type: Number }),
    __metadata("design:type", Number)
], CatalogVariantEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, default: () => new variant_policy_entity_1.VariantPolicyEntity(), type: variant_policy_entity_1.VariantPolicyEntity }),
    __metadata("design:type", variant_policy_entity_1.VariantPolicyEntity)
], CatalogVariantEntity.prototype, "policy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, default: () => new variant_identifier_entity_1.VariantIdentifierEntity(), type: variant_identifier_entity_1.VariantIdentifierEntity }),
    __metadata("design:type", variant_identifier_entity_1.VariantIdentifierEntity)
], CatalogVariantEntity.prototype, "identifier", void 0);
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
                value: { required: true, trim: true, type: String },
            },
        ],
    }),
    __metadata("design:type", Array)
], CatalogVariantEntity.prototype, "options", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], CatalogVariantEntity.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: [], ref: app_schemas_1.AppSchemas.assets.files, type: [{ type: mongoose_2.Schema.Types.ObjectId }] }),
    __metadata("design:type", Array)
], CatalogVariantEntity.prototype, "pictures", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.pictures?.at(0);
        },
    }),
    __metadata("design:type", asset_entity_1.AssetEntity)
], CatalogVariantEntity.prototype, "picture", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.product?._id ? this.get('price') + this.product.sellPrice : this.get('price');
        },
    }),
    __metadata("design:type", Number)
], CatalogVariantEntity.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const available = Number(this.get('balance')?.available ?? 0);
            const minStock = Number(this.policy?.minStock);
            if (!minStock) {
                return balance_status_enum_1.StockBalanceStatusEnum.NOT_CONFIGURED;
            }
            if (available <= 0) {
                return balance_status_enum_1.StockBalanceStatusEnum.OUT_STOCK;
            }
            if (available <= minStock) {
                return balance_status_enum_1.StockBalanceStatusEnum.LOW_STOCK;
            }
            return balance_status_enum_1.StockBalanceStatusEnum.HEALTHY;
        },
    }),
    __metadata("design:type", String)
], CatalogVariantEntity.prototype, "status", void 0);
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
    __metadata("design:type", Function)
], CatalogVariantEntity.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'variant',
            localField: '_id',
            ref: app_schemas_1.AppSchemas.inventory.stock.balances,
        },
    }),
    __metadata("design:type", Array)
], CatalogVariantEntity.prototype, "balances", void 0);
exports.CatalogVariantEntity = CatalogVariantEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogVariantEntity);
//# sourceMappingURL=variant.entity.js.map