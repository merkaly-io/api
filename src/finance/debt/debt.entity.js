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
exports.FinanceDebtEntity = exports.FinanceDebtCollectedSchema = exports.FinanceDebtCollectedEntity = exports.FinanceDebtHistorySchema = exports.FinanceDebtHistoryEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const debt_enum_1 = require("./debt.enum");
let FinanceDebtHistoryEntity = class FinanceDebtHistoryEntity {
    date;
    status;
    withdrawal;
};
exports.FinanceDebtHistoryEntity = FinanceDebtHistoryEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceDebtHistoryEntity.prototype, "date", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: debt_enum_1.FinanceDebtStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceDebtHistoryEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.finance.withdrawals, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceDebtHistoryEntity.prototype, "withdrawal", void 0);
exports.FinanceDebtHistoryEntity = FinanceDebtHistoryEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceDebtHistoryEntity);
exports.FinanceDebtHistorySchema = mongoose_1.SchemaFactory.createForClass(FinanceDebtHistoryEntity);
let FinanceDebtCollectedEntity = class FinanceDebtCollectedEntity {
    withdrawal;
};
exports.FinanceDebtCollectedEntity = FinanceDebtCollectedEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.finance.withdrawals, required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceDebtCollectedEntity.prototype, "withdrawal", void 0);
exports.FinanceDebtCollectedEntity = FinanceDebtCollectedEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], FinanceDebtCollectedEntity);
exports.FinanceDebtCollectedSchema = mongoose_1.SchemaFactory.createForClass(FinanceDebtCollectedEntity);
let FinanceDebtEntity = class FinanceDebtEntity extends abstract_entity_1.AbstractEntity {
    amount;
    reason;
    payment;
    status;
    history = [];
    collected;
};
exports.FinanceDebtEntity = FinanceDebtEntity;
__decorate([
    (0, mongoose_1.Prop)({ min: 1, required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinanceDebtEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: debt_enum_1.FinanceDebtReasonEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceDebtEntity.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.finance.payments, required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceDebtEntity.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: debt_enum_1.FinanceDebtStatusEnum.OPEN, enum: debt_enum_1.FinanceDebtStatusEnum, type: String }),
    __metadata("design:type", String)
], FinanceDebtEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.FinanceDebtHistorySchema] }),
    __metadata("design:type", Array)
], FinanceDebtEntity.prototype, "history", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.FinanceDebtCollectedSchema }),
    __metadata("design:type", FinanceDebtCollectedEntity)
], FinanceDebtEntity.prototype, "collected", void 0);
exports.FinanceDebtEntity = FinanceDebtEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceDebtEntity);
//# sourceMappingURL=debt.entity.js.map