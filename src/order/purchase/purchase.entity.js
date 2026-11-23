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
exports.OrderPurchaseEntity = exports.OrderPurchaseSupplierOrderSchema = exports.OrderPurchaseSupplierOrderEntity = exports.OrderPurchaseLogisticsSchema = exports.OrderPurchaseLogisticsEntity = exports.OrderPurchaseSupplierOrderPartSchema = exports.OrderPurchaseSupplierOrderPartEntity = exports.OrderPurchaseSupplierOrderItemSchema = exports.OrderPurchaseSupplierOrderItemEntity = exports.OrderPurchaseSupplierErrorSchema = exports.OrderPurchaseSupplierErrorEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const vendor_entity_1 = require("../../contact/vendor/vendor.entity");
const provider_enum_1 = require("../../integration/supplier/provider.enum");
const purchase_item_schema_1 = require("../schemas/purchase.item.schema");
const abstract_entity_1 = require("../../abstract.entity");
const transaction_entity_1 = require("../../transaction.entity");
const purchase_enum_1 = require("./purchase.enum");
const isCentsOrNull = (value) => value == null || Number.isInteger(value);
let OrderPurchaseSupplierErrorEntity = class OrderPurchaseSupplierErrorEntity {
    code;
    message;
};
exports.OrderPurchaseSupplierErrorEntity = OrderPurchaseSupplierErrorEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: provider_enum_1.SupplierErrorCodeEnum, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierErrorEntity.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierErrorEntity.prototype, "message", void 0);
exports.OrderPurchaseSupplierErrorEntity = OrderPurchaseSupplierErrorEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseSupplierErrorEntity);
exports.OrderPurchaseSupplierErrorSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseSupplierErrorEntity);
let OrderPurchaseSupplierOrderItemEntity = class OrderPurchaseSupplierOrderItemEntity {
    item;
    quantity;
};
exports.OrderPurchaseSupplierOrderItemEntity = OrderPurchaseSupplierOrderItemEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderItemEntity.prototype, "item", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 1, required: true, type: Number }),
    __metadata("design:type", Number)
], OrderPurchaseSupplierOrderItemEntity.prototype, "quantity", void 0);
exports.OrderPurchaseSupplierOrderItemEntity = OrderPurchaseSupplierOrderItemEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseSupplierOrderItemEntity);
exports.OrderPurchaseSupplierOrderItemSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseSupplierOrderItemEntity);
let OrderPurchaseSupplierOrderPartEntity = class OrderPurchaseSupplierOrderPartEntity {
    id;
    status;
    rawStatus;
    items = [];
    productCost;
    shippingCost;
    taxCost;
    cancelledAt;
};
exports.OrderPurchaseSupplierOrderPartEntity = OrderPurchaseSupplierOrderPartEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderPartEntity.prototype, "id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: [...Object.values(purchase_enum_1.OrderPurchaseStatusEnum), null], type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderPartEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderPartEntity.prototype, "rawStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.OrderPurchaseSupplierOrderItemSchema] }),
    __metadata("design:type", Array)
], OrderPurchaseSupplierOrderPartEntity.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, validate: { validator: isCentsOrNull } }),
    __metadata("design:type", Number)
], OrderPurchaseSupplierOrderPartEntity.prototype, "productCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, validate: { validator: isCentsOrNull } }),
    __metadata("design:type", Number)
], OrderPurchaseSupplierOrderPartEntity.prototype, "shippingCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, validate: { validator: isCentsOrNull } }),
    __metadata("design:type", Number)
], OrderPurchaseSupplierOrderPartEntity.prototype, "taxCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseSupplierOrderPartEntity.prototype, "cancelledAt", void 0);
exports.OrderPurchaseSupplierOrderPartEntity = OrderPurchaseSupplierOrderPartEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseSupplierOrderPartEntity);
exports.OrderPurchaseSupplierOrderPartSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseSupplierOrderPartEntity);
let OrderPurchaseLogisticsEntity = class OrderPurchaseLogisticsEntity {
    sku;
    service;
};
exports.OrderPurchaseLogisticsEntity = OrderPurchaseLogisticsEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseLogisticsEntity.prototype, "sku", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseLogisticsEntity.prototype, "service", void 0);
exports.OrderPurchaseLogisticsEntity = OrderPurchaseLogisticsEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseLogisticsEntity);
exports.OrderPurchaseLogisticsSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseLogisticsEntity);
let OrderPurchaseSupplierOrderEntity = class OrderPurchaseSupplierOrderEntity {
    provider;
    orderIds = [];
    orders = [];
    reference;
    rawStatus;
    placedAt;
    syncedAt;
    payExpiryDate;
    error;
    paidAfterCancelAt;
};
exports.OrderPurchaseSupplierOrderEntity = OrderPurchaseSupplierOrderEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: provider_enum_1.SupplierProviderEnum, required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [String] }),
    __metadata("design:type", Array)
], OrderPurchaseSupplierOrderEntity.prototype, "orderIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.OrderPurchaseSupplierOrderPartSchema] }),
    __metadata("design:type", Array)
], OrderPurchaseSupplierOrderEntity.prototype, "orders", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "rawStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseSupplierOrderEntity.prototype, "placedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseSupplierOrderEntity.prototype, "syncedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseSupplierOrderEntity.prototype, "payExpiryDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.OrderPurchaseSupplierErrorSchema }),
    __metadata("design:type", OrderPurchaseSupplierErrorEntity)
], OrderPurchaseSupplierOrderEntity.prototype, "error", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseSupplierOrderEntity.prototype, "paidAfterCancelAt", void 0);
exports.OrderPurchaseSupplierOrderEntity = OrderPurchaseSupplierOrderEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseSupplierOrderEntity);
exports.OrderPurchaseSupplierOrderSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseSupplierOrderEntity);
let OrderPurchaseEntity = class OrderPurchaseEntity extends transaction_entity_1.TransactionEntity {
    vendor;
    sale;
    items = [];
    shippingCost;
    taxCost;
    chargedAt;
    logistics = [];
    supplierOrder;
};
exports.OrderPurchaseEntity = OrderPurchaseEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.contact.vendors, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", vendor_entity_1.ContactVendorEntity)
], OrderPurchaseEntity.prototype, "vendor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.order.sales, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], OrderPurchaseEntity.prototype, "sale", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: () => [],
        type: [purchase_item_schema_1.OrderPurchaseItemSchema.schema],
        validate: {
            message: 'Purchase items cannot be empty',
            validator: (items = []) => items.length > 0,
        },
    }),
    __metadata("design:type", Array)
], OrderPurchaseEntity.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        min: 0,
        type: Number,
        validate: { validator: (value) => value == null || Number.isInteger(value) },
    }),
    __metadata("design:type", Number)
], OrderPurchaseEntity.prototype, "shippingCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        min: 0,
        type: Number,
        validate: { validator: (value) => value == null || Number.isInteger(value) },
    }),
    __metadata("design:type", Number)
], OrderPurchaseEntity.prototype, "taxCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderPurchaseEntity.prototype, "chargedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.OrderPurchaseLogisticsSchema] }),
    __metadata("design:type", Array)
], OrderPurchaseEntity.prototype, "logistics", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.OrderPurchaseSupplierOrderSchema }),
    __metadata("design:type", OrderPurchaseSupplierOrderEntity)
], OrderPurchaseEntity.prototype, "supplierOrder", void 0);
exports.OrderPurchaseEntity = OrderPurchaseEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], OrderPurchaseEntity);
//# sourceMappingURL=purchase.entity.js.map