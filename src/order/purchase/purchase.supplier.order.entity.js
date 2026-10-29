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
exports.OrderPurchaseSupplierOrderSchema = exports.OrderPurchaseSupplierOrderEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const provider_enum_1 = require("../../integration/supplier/provider.enum");
const supplier_order_enum_1 = require("./supplier.order.enum");
let OrderPurchaseSupplierOrderEntity = class OrderPurchaseSupplierOrderEntity {
    provider;
    externalOrderIds = [];
    reference;
    status;
    rawStatus;
    placedAt;
    syncedAt;
    trackingNumbers = [];
    carrier;
    trackingUrl;
    error;
};
exports.OrderPurchaseSupplierOrderEntity = OrderPurchaseSupplierOrderEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: provider_enum_1.SupplierProviderEnum, required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [String] }),
    __metadata("design:type", Array)
], OrderPurchaseSupplierOrderEntity.prototype, "externalOrderIds", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: supplier_order_enum_1.OrderSupplierOrderStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "status", void 0);
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
    (0, mongoose_1.Prop)({ default: () => [], type: [String] }),
    __metadata("design:type", Array)
], OrderPurchaseSupplierOrderEntity.prototype, "trackingNumbers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "carrier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "trackingUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], OrderPurchaseSupplierOrderEntity.prototype, "error", void 0);
exports.OrderPurchaseSupplierOrderEntity = OrderPurchaseSupplierOrderEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderPurchaseSupplierOrderEntity);
exports.OrderPurchaseSupplierOrderSchema = mongoose_1.SchemaFactory.createForClass(OrderPurchaseSupplierOrderEntity);
//# sourceMappingURL=purchase.supplier.order.entity.js.map