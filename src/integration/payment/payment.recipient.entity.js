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
exports.IntegrationPaymentRecipientSchema = exports.IntegrationPaymentRecipientEntity = exports.IntegrationPaymentRecipientTransferSchema = exports.IntegrationPaymentRecipientTransferEntity = exports.IntegrationPaymentRecipientBankSchema = exports.IntegrationPaymentRecipientBankEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const recipient_enum_1 = require("./recipient.enum");
let IntegrationPaymentRecipientBankEntity = class IntegrationPaymentRecipientBankEntity {
    bank;
    branch;
    accountLast4;
    type;
};
exports.IntegrationPaymentRecipientBankEntity = IntegrationPaymentRecipientBankEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientBankEntity.prototype, "bank", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientBankEntity.prototype, "branch", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientBankEntity.prototype, "accountLast4", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: recipient_enum_1.PaymentBankAccountTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientBankEntity.prototype, "type", void 0);
exports.IntegrationPaymentRecipientBankEntity = IntegrationPaymentRecipientBankEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentRecipientBankEntity);
exports.IntegrationPaymentRecipientBankSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentRecipientBankEntity);
let IntegrationPaymentRecipientTransferEntity = class IntegrationPaymentRecipientTransferEntity {
    enabled;
    interval;
    day;
};
exports.IntegrationPaymentRecipientTransferEntity = IntegrationPaymentRecipientTransferEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Boolean }),
    __metadata("design:type", Boolean)
], IntegrationPaymentRecipientTransferEntity.prototype, "enabled", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: recipient_enum_1.PaymentTransferIntervalEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientTransferEntity.prototype, "interval", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Number)
], IntegrationPaymentRecipientTransferEntity.prototype, "day", void 0);
exports.IntegrationPaymentRecipientTransferEntity = IntegrationPaymentRecipientTransferEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentRecipientTransferEntity);
exports.IntegrationPaymentRecipientTransferSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentRecipientTransferEntity);
let IntegrationPaymentRecipientEntity = class IntegrationPaymentRecipientEntity {
    recipientId;
    type;
    documentMasked;
    name;
    status;
    kycStatus;
    kycStatusReason;
    bank;
    transferSettings;
    createdAt;
    syncedAt;
};
exports.IntegrationPaymentRecipientEntity = IntegrationPaymentRecipientEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "recipientId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: recipient_enum_1.PaymentRecipientTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "documentMasked", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: recipient_enum_1.PaymentRecipientStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "kycStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentRecipientEntity.prototype, "kycStatusReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.IntegrationPaymentRecipientBankSchema }),
    __metadata("design:type", IntegrationPaymentRecipientBankEntity)
], IntegrationPaymentRecipientEntity.prototype, "bank", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.IntegrationPaymentRecipientTransferSchema }),
    __metadata("design:type", IntegrationPaymentRecipientTransferEntity)
], IntegrationPaymentRecipientEntity.prototype, "transferSettings", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentRecipientEntity.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentRecipientEntity.prototype, "syncedAt", void 0);
exports.IntegrationPaymentRecipientEntity = IntegrationPaymentRecipientEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentRecipientEntity);
exports.IntegrationPaymentRecipientSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentRecipientEntity);
//# sourceMappingURL=payment.recipient.entity.js.map