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
exports.FinanceRefundEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const refund_enum_1 = require("./refund.enum");
let FinanceRefundEntity = class FinanceRefundEntity extends abstract_entity_1.AbstractEntity {
    payment;
    amount = 0;
    status;
    reason;
    notes;
    history = [];
    number;
};
exports.FinanceRefundEntity = FinanceRefundEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.finance.payments, required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceRefundEntity.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, validate: { validator: Number.isInteger } }),
    __metadata("design:type", Object)
], FinanceRefundEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: refund_enum_1.FinanceRefundReasonEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceRefundEntity.prototype, "reason", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], FinanceRefundEntity.prototype, "notes", void 0);
exports.FinanceRefundEntity = FinanceRefundEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceRefundEntity);
//# sourceMappingURL=refund.entity.js.map