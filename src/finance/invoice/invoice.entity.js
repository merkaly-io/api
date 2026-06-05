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
exports.FinanceInvoiceEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const abstract_entity_1 = require("../../abstract.entity");
const invoice_enum_1 = require("./invoice.enum");
let FinanceInvoiceEntity = class FinanceInvoiceEntity extends abstract_entity_1.AbstractEntity {
    order;
    orderModel;
    total = 0;
    subtotal = 0;
    tax = 0;
    status = invoice_enum_1.FinanceInvoiceStatusEnum.DRAFT;
    type;
    dueDate;
    notes;
    number;
};
exports.FinanceInvoiceEntity = FinanceInvoiceEntity;
__decorate([
    (0, mongoose_1.Prop)({ refPath: 'orderModel', required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Object)
], FinanceInvoiceEntity.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], FinanceInvoiceEntity.prototype, "orderModel", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number }),
    __metadata("design:type", Object)
], FinanceInvoiceEntity.prototype, "total", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, type: Number }),
    __metadata("design:type", Object)
], FinanceInvoiceEntity.prototype, "subtotal", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, type: Number }),
    __metadata("design:type", Object)
], FinanceInvoiceEntity.prototype, "tax", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: invoice_enum_1.FinanceInvoiceStatusEnum.DRAFT,
        enum: invoice_enum_1.FinanceInvoiceStatusEnum,
        type: String,
    }),
    __metadata("design:type", String)
], FinanceInvoiceEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: invoice_enum_1.FinanceInvoiceTypeEnum, required: true, type: String }),
    __metadata("design:type", String)
], FinanceInvoiceEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], FinanceInvoiceEntity.prototype, "dueDate", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], FinanceInvoiceEntity.prototype, "notes", void 0);
exports.FinanceInvoiceEntity = FinanceInvoiceEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], FinanceInvoiceEntity);
//# sourceMappingURL=invoice.entity.js.map