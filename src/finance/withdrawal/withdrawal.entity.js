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
exports.FinanceWithdrawalEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const account_enum_1 = require("../../integration/payment/account.enum");
const abstract_entity_1 = require("../../abstract.entity");
const withdrawal_enum_1 = require("./withdrawal.enum");
const cents = { validate: { validator: Number.isInteger } };
let FinanceWithdrawalEntity = class FinanceWithdrawalEntity extends abstract_entity_1.AbstractEntity {
    amount;
    fee;
    netAmount;
    pixKeyType;
    pixKeyMasked;
    status;
    rawStatus;
    failReason;
    authorized;
    requestedBy;
    requestedAt;
    completedAt;
    provider;
    reference;
    receiptUrl;
};
exports.FinanceWithdrawalEntity = FinanceWithdrawalEntity;
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, ...cents }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, ...cents }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, ...cents }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "netAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: [...Object.values(account_enum_1.PaymentPixKeyTypeEnum), null], type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "pixKeyType", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "pixKeyMasked", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: withdrawal_enum_1.FinanceWithdrawalStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "rawStatus", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "failReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Boolean }),
    __metadata("design:type", Boolean)
], FinanceWithdrawalEntity.prototype, "authorized", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.account.users, type: String }),
    __metadata("design:type", Object)
], FinanceWithdrawalEntity.prototype, "requestedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceWithdrawalEntity.prototype, "requestedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceWithdrawalEntity.prototype, "completedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "receiptUrl", void 0);
exports.FinanceWithdrawalEntity = FinanceWithdrawalEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceWithdrawalEntity);
//# sourceMappingURL=withdrawal.entity.js.map