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
exports.FinancePaymentGatewaySchema = exports.FinancePaymentGatewayEntity = exports.FinancePaymentGatewayPixSchema = exports.FinancePaymentGatewayPixEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const payment_enum_1 = require("./payment.enum");
let FinancePaymentGatewayPixEntity = class FinancePaymentGatewayPixEntity {
    qrCode;
    qrCodeUrl;
};
exports.FinancePaymentGatewayPixEntity = FinancePaymentGatewayPixEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayPixEntity.prototype, "qrCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayPixEntity.prototype, "qrCodeUrl", void 0);
exports.FinancePaymentGatewayPixEntity = FinancePaymentGatewayPixEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinancePaymentGatewayPixEntity);
exports.FinancePaymentGatewayPixSchema = mongoose_1.SchemaFactory.createForClass(FinancePaymentGatewayPixEntity);
let FinancePaymentGatewayEntity = class FinancePaymentGatewayEntity {
    provider;
    reference;
    chargeId;
    method;
    status;
    statusDetail;
    message;
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
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "chargeId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: payment_enum_1.FinancePaymentMethodEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "statusDetail", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentGatewayEntity.prototype, "message", void 0);
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
//# sourceMappingURL=payment.gateway.entity.js.map