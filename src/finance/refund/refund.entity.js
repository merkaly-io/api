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
exports.FinanceRefundEntity = exports.FinanceRefundGatewaySchema = exports.FinanceRefundGatewayEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const refund_enum_1 = require("./refund.enum");
let FinanceRefundGatewayEntity = class FinanceRefundGatewayEntity {
    provider;
    reference;
    status;
    receiptUrl;
    details;
    description;
};
exports.FinanceRefundGatewayEntity = FinanceRefundGatewayEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundGatewayEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundGatewayEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundGatewayEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundGatewayEntity.prototype, "receiptUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Mixed }),
    __metadata("design:type", Object)
], FinanceRefundGatewayEntity.prototype, "details", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundGatewayEntity.prototype, "description", void 0);
exports.FinanceRefundGatewayEntity = FinanceRefundGatewayEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceRefundGatewayEntity);
exports.FinanceRefundGatewaySchema = mongoose_1.SchemaFactory.createForClass(FinanceRefundGatewayEntity);
let FinanceRefundEntity = class FinanceRefundEntity extends abstract_entity_1.AbstractEntity {
    payment;
    purchase;
    amount;
    isPartial;
    origin;
    status;
    gateway;
    refundedAt;
    error;
};
exports.FinanceRefundEntity = FinanceRefundEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.finance.payments, required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceRefundEntity.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.order.purchases, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceRefundEntity.prototype, "purchase", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinanceRefundEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false, type: Boolean }),
    __metadata("design:type", Boolean)
], FinanceRefundEntity.prototype, "isPartial", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: refund_enum_1.FinanceRefundOriginEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundEntity.prototype, "origin", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: refund_enum_1.FinanceRefundStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.FinanceRefundGatewaySchema }),
    __metadata("design:type", FinanceRefundGatewayEntity)
], FinanceRefundEntity.prototype, "gateway", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceRefundEntity.prototype, "refundedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundEntity.prototype, "error", void 0);
exports.FinanceRefundEntity = FinanceRefundEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceRefundEntity);
//# sourceMappingURL=refund.entity.js.map