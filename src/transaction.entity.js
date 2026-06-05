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
exports.TransactionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const user_entity_1 = require("../../domain/account/entities/user.entity");
const payment_entity_1 = require("../../domain/finance/entities/payment.entity");
const warehouse_entity_1 = require("../../domain/inventory/stock/entities/warehouse.entity");
const abstract_entity_1 = require("../abstracts/abstract.entity");
class TransactionEntity extends abstract_entity_1.AbstractEntity {
    user;
    warehouse;
    notes;
    status;
    items = [];
    warehouses;
    number;
    pricing;
    payment;
    isProcessable;
    history = [];
}
exports.TransactionEntity = TransactionEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.account.users, required: true, type: String }),
    __metadata("design:type", user_entity_1.AccountUserEntity)
], TransactionEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        ref: app_schemas_1.AppSchemas.inventory.stock.warehouses,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", warehouse_entity_1.StockWarehouseEntity)
], TransactionEntity.prototype, "warehouse", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true }),
    __metadata("design:type", String)
], TransactionEntity.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const items = this.items;
            return items.reduce((acc, item) => {
                const index = (item.warehouse?._id || item.warehouse);
                (acc[index] ??= []).push(item);
                return acc;
            }, {});
        },
    }),
    __metadata("design:type", Object)
], TransactionEntity.prototype, "warehouses", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const items = this.items;
            const subtotal = items.reduce((sum, item) => sum + item.get('price.total'), 0);
            const units = items.reduce((sum, it) => sum + Number(it.quantity || 0), 0);
            const total = subtotal;
            return { subtotal, total, units };
        },
    }),
    __metadata("design:type", Object)
], TransactionEntity.prototype, "pricing", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'order',
            justOne: true,
            localField: '_id',
            ref: app_schemas_1.AppSchemas.finance.payments,
        },
    }),
    __metadata("design:type", payment_entity_1.FinancePaymentEntity)
], TransactionEntity.prototype, "payment", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.items.every((it) => it.isProcessable === true);
        },
    }),
    __metadata("design:type", Boolean)
], TransactionEntity.prototype, "isProcessable", void 0);
//# sourceMappingURL=transaction.entity.js.map