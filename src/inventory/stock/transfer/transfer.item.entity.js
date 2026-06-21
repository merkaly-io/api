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
exports.StockTransferItemEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const product_entity_1 = require("../../catalog/product/product.entity");
const variant_entity_1 = require("../../catalog/variant/variant.entity");
const abstract_entity_1 = require("../../../abstract.entity");
const transfer_enum_1 = require("./transfer.enum");
let StockTransferItemEntity = class StockTransferItemEntity extends abstract_entity_1.AbstractEntity {
    product;
    variant;
    quantity;
    reservedQuantity;
    notes;
    balance;
    availability;
    isProcessable;
};
exports.StockTransferItemEntity = StockTransferItemEntity;
__decorate([
    (0, mongoose_1.Prop)({
        ref: app_schemas_1.AppSchemas.inventory.catalog.products,
        type: mongoose_2.Schema.Types.ObjectId,
        required: true,
    }),
    __metadata("design:type", product_entity_1.CatalogProductEntity)
], StockTransferItemEntity.prototype, "product", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        type: mongoose_2.Schema.Types.ObjectId,
        required: true,
    }),
    __metadata("design:type", variant_entity_1.CatalogVariantEntity)
], StockTransferItemEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, min: 1, default: 1 }),
    __metadata("design:type", Number)
], StockTransferItemEntity.prototype, "quantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Number, min: 0 }),
    __metadata("design:type", Number)
], StockTransferItemEntity.prototype, "reservedQuantity", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true }),
    __metadata("design:type", String)
], StockTransferItemEntity.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const transfer = this.$parent();
            const warehouse = transfer.origin || transfer.destination;
            const warehouseId = (warehouse?._id ?? warehouse)?.toString?.();
            return this.variant?.balances?.find((it) => {
                const itemWarehouseId = (it.warehouse?._id ?? it.warehouse)?.toString?.();
                return itemWarehouseId === warehouseId;
            });
        },
    }),
    __metadata("design:type", Function)
], StockTransferItemEntity.prototype, "balance", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const transfer = this.$parent();
            const remaining = Number(this.get('balance')?.available ?? 0);
            if (!transfer.origin) {
                return {
                    allocatable: null,
                    mode: 'incoming',
                    processable: true,
                    remaining,
                    reserved: null,
                    unreserved: null,
                };
            }
            const legacyReservation = transfer.status === transfer_enum_1.TransferStatusEnum.PENDING ? this.quantity : 0;
            const reserved = Math.min(Number(this.reservedQuantity ?? legacyReservation), this.quantity);
            const unreserved = Math.max(this.quantity - reserved, 0);
            const allocatable = remaining + reserved;
            return {
                allocatable,
                mode: 'reservation',
                processable: unreserved === 0,
                remaining,
                reserved,
                unreserved,
            };
        },
    }),
    __metadata("design:type", Object)
], StockTransferItemEntity.prototype, "availability", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.get('availability')?.processable === true;
        },
    }),
    __metadata("design:type", Boolean)
], StockTransferItemEntity.prototype, "isProcessable", void 0);
exports.StockTransferItemEntity = StockTransferItemEntity = __decorate([
    (0, mongoose_1.Schema)({ ...abstract_entity_1.$collection, timestamps: false })
], StockTransferItemEntity);
//# sourceMappingURL=transfer.item.entity.js.map