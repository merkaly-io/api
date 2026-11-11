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
exports.FinancePaymentEntity = exports.FinancePaymentAttemptSchema = exports.FinancePaymentAttemptEntity = exports.FinancePaymentGatewaySchema = exports.FinancePaymentGatewayEntity = exports.FinancePaymentGatewayPixSchema = exports.FinancePaymentGatewayPixEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const charge_enum_1 = require("../../integration/payment/charge.enum");
const abstract_entity_1 = require("../../abstract.entity");
const payment_enum_1 = require("./payment.enum");
let FinancePaymentGatewayPixEntity = class FinancePaymentGatewayPixEntity {
    qrCode;
    qrCodeImage;
};
exports.FinancePaymentGatewayPixEntity = FinancePaymentGatewayPixEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayPixEntity.prototype, "qrCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayPixEntity.prototype, "qrCodeImage", void 0);
exports.FinancePaymentGatewayPixEntity = FinancePaymentGatewayPixEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinancePaymentGatewayPixEntity);
exports.FinancePaymentGatewayPixSchema = mongoose_1.SchemaFactory.createForClass(FinancePaymentGatewayPixEntity);
let FinancePaymentGatewayEntity = class FinancePaymentGatewayEntity {
    provider;
    reference;
    account;
    method;
    status;
    attempt;
    amount;
    pix;
    expiresAt;
    syncedAt;
};
exports.FinancePaymentGatewayEntity = FinancePaymentGatewayEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: charge_enum_1.PaymentChargeAccountEnum, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "account", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: payment_enum_1.FinancePaymentMethodEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 1, min: 1, type: Number }),
    __metadata("design:type", Number)
], FinancePaymentGatewayEntity.prototype, "attempt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinancePaymentGatewayEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.FinancePaymentGatewayPixSchema }),
    __metadata("design:type", FinancePaymentGatewayPixEntity)
], FinancePaymentGatewayEntity.prototype, "pix", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinancePaymentGatewayEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinancePaymentGatewayEntity.prototype, "syncedAt", void 0);
exports.FinancePaymentGatewayEntity = FinancePaymentGatewayEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinancePaymentGatewayEntity);
exports.FinancePaymentGatewaySchema = mongoose_1.SchemaFactory.createForClass(FinancePaymentGatewayEntity);
let FinancePaymentAttemptEntity = class FinancePaymentAttemptEntity {
    reference;
    method;
    status;
    rawStatus;
    amount;
    expiresAt;
    createdAt;
    syncedAt;
};
exports.FinancePaymentAttemptEntity = FinancePaymentAttemptEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentAttemptEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: payment_enum_1.FinancePaymentMethodEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentAttemptEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentAttemptEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentAttemptEntity.prototype, "rawStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinancePaymentAttemptEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinancePaymentAttemptEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinancePaymentAttemptEntity.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinancePaymentAttemptEntity.prototype, "syncedAt", void 0);
exports.FinancePaymentAttemptEntity = FinancePaymentAttemptEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinancePaymentAttemptEntity);
exports.FinancePaymentAttemptSchema = mongoose_1.SchemaFactory.createForClass(FinancePaymentAttemptEntity);
let FinancePaymentEntity = class FinancePaymentEntity extends abstract_entity_1.AbstractEntity {
    type;
    target;
    order;
    amount;
    fee;
    method;
    gateway;
    attempts;
    splitProblem;
    status;
    history = [];
    number;
};
exports.FinancePaymentEntity = FinancePaymentEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: payment_enum_1.FinancePaymentTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentEntity.prototype, "target", void 0);
__decorate([
    (0, mongoose_1.Prop)({ refPath: 'target', required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinancePaymentEntity.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, default: 0, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinancePaymentEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, min: 0, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinancePaymentEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: [...Object.values(payment_enum_1.FinancePaymentMethodEnum), null], type: String }),
    __metadata("design:type", String)
], FinancePaymentEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.FinancePaymentGatewaySchema }),
    __metadata("design:type", FinancePaymentGatewayEntity)
], FinancePaymentEntity.prototype, "gateway", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: undefined, type: [exports.FinancePaymentAttemptSchema] }),
    __metadata("design:type", Array)
], FinancePaymentEntity.prototype, "attempts", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, select: false, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentEntity.prototype, "splitProblem", void 0);
exports.FinancePaymentEntity = FinancePaymentEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinancePaymentEntity);
//# sourceMappingURL=payment.entity.js.map