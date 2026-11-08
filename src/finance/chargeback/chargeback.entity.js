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
exports.FinanceChargebackEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const chargeback_enum_1 = require("./chargeback.enum");
let FinanceChargebackEntity = class FinanceChargebackEntity extends abstract_entity_1.AbstractEntity {
    payment;
    status;
    reason;
    rawReason;
    openedAt;
    respondBy;
    resolvedAt;
    amount;
    provider;
    reference;
    chargebackId;
    rawStatus;
};
exports.FinanceChargebackEntity = FinanceChargebackEntity;
__decorate([
    (0, mongoose_1.Prop)({
        index: true,
        ref: app_schemas_1.AppSchemas.finance.payments,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", Object)
], FinanceChargebackEntity.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: chargeback_enum_1.FinanceChargebackStatusEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        enum: [...Object.values(chargeback_enum_1.FinanceChargebackReasonEnum), null],
        type: String,
    }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "rawReason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceChargebackEntity.prototype, "openedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceChargebackEntity.prototype, "respondBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], FinanceChargebackEntity.prototype, "resolvedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Number)
], FinanceChargebackEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "reference", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "chargebackId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], FinanceChargebackEntity.prototype, "rawStatus", void 0);
exports.FinanceChargebackEntity = FinanceChargebackEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceChargebackEntity);
//# sourceMappingURL=chargeback.entity.js.map