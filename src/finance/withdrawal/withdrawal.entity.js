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
exports.FinanceWithdrawalEntity = exports.FinanceWithdrawalGatewaySchema = exports.FinanceWithdrawalGatewayEntity = exports.FinanceWithdrawalPixKeySchema = exports.FinanceWithdrawalPixKeyEntity = exports.FinanceWithdrawalHistorySchema = exports.FinanceWithdrawalHistoryEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const account_enum_1 = require("../../integration/payment/account.enum");
const abstract_entity_1 = require("../../abstract.entity");
const withdrawal_enum_1 = require("./withdrawal.enum");
const cents = { validate: { validator: Number.isInteger } };
let FinanceWithdrawalHistoryEntity = class FinanceWithdrawalHistoryEntity {
    date;
    status;
};
exports.FinanceWithdrawalHistoryEntity = FinanceWithdrawalHistoryEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceWithdrawalHistoryEntity.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: withdrawal_enum_1.FinanceWithdrawalStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalHistoryEntity.prototype, "status", void 0);
exports.FinanceWithdrawalHistoryEntity = FinanceWithdrawalHistoryEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceWithdrawalHistoryEntity);
exports.FinanceWithdrawalHistorySchema = mongoose_1.SchemaFactory.createForClass(FinanceWithdrawalHistoryEntity);
let FinanceWithdrawalPixKeyEntity = class FinanceWithdrawalPixKeyEntity {
    type;
    masked;
};
exports.FinanceWithdrawalPixKeyEntity = FinanceWithdrawalPixKeyEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, enum: [...Object.values(account_enum_1.PaymentPixKeyTypeEnum), null], type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalPixKeyEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalPixKeyEntity.prototype, "masked", void 0);
exports.FinanceWithdrawalPixKeyEntity = FinanceWithdrawalPixKeyEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceWithdrawalPixKeyEntity);
exports.FinanceWithdrawalPixKeySchema = mongoose_1.SchemaFactory.createForClass(FinanceWithdrawalPixKeyEntity);
let FinanceWithdrawalGatewayEntity = class FinanceWithdrawalGatewayEntity {
    provider;
    reference;
    status;
    receiptUrl;
};
exports.FinanceWithdrawalGatewayEntity = FinanceWithdrawalGatewayEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalGatewayEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalGatewayEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalGatewayEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalGatewayEntity.prototype, "receiptUrl", void 0);
exports.FinanceWithdrawalGatewayEntity = FinanceWithdrawalGatewayEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceWithdrawalGatewayEntity);
exports.FinanceWithdrawalGatewaySchema = mongoose_1.SchemaFactory.createForClass(FinanceWithdrawalGatewayEntity);
let FinanceWithdrawalEntity = class FinanceWithdrawalEntity extends abstract_entity_1.AbstractEntity {
    amount;
    fee;
    netAmount;
    status;
    kind;
    history = [];
    error;
    requestedBy;
    pixKey;
    gateway;
};
exports.FinanceWithdrawalEntity = FinanceWithdrawalEntity;
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, ...cents }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, min: 0, required: true, type: Number, ...cents }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.amount - (this.fee ?? 0);
        },
    }),
    __metadata("design:type", Number)
], FinanceWithdrawalEntity.prototype, "netAmount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: withdrawal_enum_1.FinanceWithdrawalStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: withdrawal_enum_1.FinanceWithdrawalKindEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "kind", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.FinanceWithdrawalHistorySchema] }),
    __metadata("design:type", Array)
], FinanceWithdrawalEntity.prototype, "history", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceWithdrawalEntity.prototype, "error", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.account.users, type: String }),
    __metadata("design:type", Object)
], FinanceWithdrawalEntity.prototype, "requestedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.FinanceWithdrawalPixKeySchema }),
    __metadata("design:type", FinanceWithdrawalPixKeyEntity)
], FinanceWithdrawalEntity.prototype, "pixKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.FinanceWithdrawalGatewaySchema }),
    __metadata("design:type", FinanceWithdrawalGatewayEntity)
], FinanceWithdrawalEntity.prototype, "gateway", void 0);
exports.FinanceWithdrawalEntity = FinanceWithdrawalEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceWithdrawalEntity);
//# sourceMappingURL=withdrawal.entity.js.map