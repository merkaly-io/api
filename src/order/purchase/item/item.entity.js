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
exports.ItemEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const schema_decorator_1 = require("@nestjs/mongoose/dist/decorators/schema.decorator");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const product_entity_1 = require("../../domain/inventory/catalog/entities/product.entity");
const variant_entity_1 = require("../../domain/inventory/catalog/entities/variant.entity");
const balance_entity_1 = require("../../domain/inventory/stock/entities/balance.entity");
const warehouse_entity_1 = require("../../domain/inventory/stock/entities/warehouse.entity");
const abstract_entity_1 = require("../abstracts/abstract.entity");
let ItemEntity = class ItemEntity extends abstract_entity_1.AbstractEntity {
    product;
    variant;
    warehouse;
    quantity;
    notes;
    price;
    'price.unit';
    'price.total';
    balance;
    isProcessable;
};
exports.ItemEntity = ItemEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.inventory.catalog.products, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", product_entity_1.CatalogProductEntity)
], ItemEntity.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", variant_entity_1.CatalogVariantEntity)
], ItemEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.stock.warehouses,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", warehouse_entity_1.StockWarehouseEntity)
], ItemEntity.prototype, "warehouse", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, min: 1, default: 1 }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: () => '', trim: true }),
    __metadata("design:type", String)
], ItemEntity.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        _id: false,
        type: { product: Number, variant: Number },
        default: () => ({ product: 0, variant: 0 }),
    }),
    __metadata("design:type", Object)
], ItemEntity.prototype, "price", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return (this.price?.product || 0) + (this.price?.variant || 0);
        },
    }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "price.unit", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.quantity * this.get('price.unit');
        },
    }),
    __metadata("design:type", Number)
], ItemEntity.prototype, "price.total", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const warehouseId = (this.warehouse?._id || this.warehouse).toString();
            return this.variant.balances?.find((it) => {
                return (it.warehouse._id || it.warehouse).toString() === warehouseId;
            });
        },
    }),
    __metadata("design:type", balance_entity_1.StockBalanceEntity)
], ItemEntity.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const balance = this.get('balance');
            if (!balance) {
                return false;
            }
            return balance.available >= this.quantity;
        },
    }),
    __metadata("design:type", Boolean)
], ItemEntity.prototype, "isProcessable", void 0);
exports.ItemEntity = ItemEntity = __decorate([
    (0, schema_decorator_1.Schema)({ ...abstract_entity_1.$collection, timestamps: false })
], ItemEntity);
//# sourceMappingURL=item.entity.js.map