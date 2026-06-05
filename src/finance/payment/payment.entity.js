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
exports.FinancePaymentEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const abstract_entity_1 = require("../../abstract.entity");
const payment_enum_1 = require("./payment.enum");
let FinancePaymentEntity = class FinancePaymentEntity extends abstract_entity_1.AbstractEntity {
    type;
    target;
    order;
    amount;
    fee;
    method;
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
    (0, mongoose_1.Prop)({ required: true, type: Number, default: 0 }),
    __metadata("design:type", Number)
], FinancePaymentEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, min: 0, type: Number }),
    __metadata("design:type", Number)
], FinancePaymentEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: payment_enum_1.FinancePaymentMethodEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinancePaymentEntity.prototype, "method", void 0);
exports.FinancePaymentEntity = FinancePaymentEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinancePaymentEntity);
//# sourceMappingURL=payment.entity.js.map