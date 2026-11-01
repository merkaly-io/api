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
exports.IntegrationPaymentAccountSchema = exports.IntegrationPaymentAccountEntity = exports.IntegrationPaymentAccountPixSchema = exports.IntegrationPaymentAccountPixEntity = exports.IntegrationPaymentAccountWithdrawalSchema = exports.IntegrationPaymentAccountWithdrawalEntity = exports.IntegrationPaymentAccountApprovalSchema = exports.IntegrationPaymentAccountApprovalEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const account_enum_1 = require("./account.enum");
let IntegrationPaymentAccountApprovalEntity = class IntegrationPaymentAccountApprovalEntity {
    general;
    commercialInfo;
    documentation;
    bankAccountInfo;
};
exports.IntegrationPaymentAccountApprovalEntity = IntegrationPaymentAccountApprovalEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentAccountApprovalEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountApprovalEntity.prototype, "general", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentAccountApprovalEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountApprovalEntity.prototype, "commercialInfo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentAccountApprovalEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountApprovalEntity.prototype, "documentation", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentAccountApprovalEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountApprovalEntity.prototype, "bankAccountInfo", void 0);
exports.IntegrationPaymentAccountApprovalEntity = IntegrationPaymentAccountApprovalEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentAccountApprovalEntity);
exports.IntegrationPaymentAccountApprovalSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentAccountApprovalEntity);
let IntegrationPaymentAccountWithdrawalEntity = class IntegrationPaymentAccountWithdrawalEntity {
    pixKeyType;
    pixKey;
};
exports.IntegrationPaymentAccountWithdrawalEntity = IntegrationPaymentAccountWithdrawalEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentPixKeyTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountWithdrawalEntity.prototype, "pixKeyType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountWithdrawalEntity.prototype, "pixKey", void 0);
exports.IntegrationPaymentAccountWithdrawalEntity = IntegrationPaymentAccountWithdrawalEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentAccountWithdrawalEntity);
exports.IntegrationPaymentAccountWithdrawalSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentAccountWithdrawalEntity);
let IntegrationPaymentAccountPixEntity = class IntegrationPaymentAccountPixEntity {
    ready;
    error;
    checkedAt;
};
exports.IntegrationPaymentAccountPixEntity = IntegrationPaymentAccountPixEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: false, type: Boolean }),
    __metadata("design:type", Boolean)
], IntegrationPaymentAccountPixEntity.prototype, "ready", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountPixEntity.prototype, "error", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentAccountPixEntity.prototype, "checkedAt", void 0);
exports.IntegrationPaymentAccountPixEntity = IntegrationPaymentAccountPixEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentAccountPixEntity);
exports.IntegrationPaymentAccountPixSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentAccountPixEntity);
let IntegrationPaymentAccountEntity = class IntegrationPaymentAccountEntity {
    accountId;
    walletId;
    apiKey;
    personType;
    documentMasked;
    name;
    email;
    approval;
    pix;
    withdrawal;
    createdAt;
    syncedAt;
};
exports.IntegrationPaymentAccountEntity = IntegrationPaymentAccountEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "accountId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "walletId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, select: false, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "apiKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: account_enum_1.PaymentAccountPersonTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "personType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "documentMasked", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentAccountEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.IntegrationPaymentAccountApprovalSchema }),
    __metadata("design:type", IntegrationPaymentAccountApprovalEntity)
], IntegrationPaymentAccountEntity.prototype, "approval", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.IntegrationPaymentAccountPixSchema }),
    __metadata("design:type", IntegrationPaymentAccountPixEntity)
], IntegrationPaymentAccountEntity.prototype, "pix", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.IntegrationPaymentAccountWithdrawalSchema }),
    __metadata("design:type", IntegrationPaymentAccountWithdrawalEntity)
], IntegrationPaymentAccountEntity.prototype, "withdrawal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentAccountEntity.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentAccountEntity.prototype, "syncedAt", void 0);
exports.IntegrationPaymentAccountEntity = IntegrationPaymentAccountEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentAccountEntity);
exports.IntegrationPaymentAccountSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentAccountEntity);
//# sourceMappingURL=payment.account.entity.js.map