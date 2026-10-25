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
exports.PurchaseSourcingEntity = exports.PurchaseLineAllocationEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
let PurchaseLineAllocationEntity = class PurchaseLineAllocationEntity {
    saleLineId;
    quantity;
};
exports.PurchaseLineAllocationEntity = PurchaseLineAllocationEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", String)
], PurchaseLineAllocationEntity.prototype, "saleLineId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, min: 1, type: Number, validate: { validator: Number.isSafeInteger } }),
    __metadata("design:type", Number)
], PurchaseLineAllocationEntity.prototype, "quantity", void 0);
exports.PurchaseLineAllocationEntity = PurchaseLineAllocationEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PurchaseLineAllocationEntity);
let PurchaseSourcingEntity = class PurchaseSourcingEntity {
    sale;
    connection;
    idempotencyKey;
    externalOrderId;
    allocations;
};
exports.PurchaseSourcingEntity = PurchaseSourcingEntity;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: app_schemas_1.AppSchemas.order.sale.transactions,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", String)
], PurchaseSourcingEntity.prototype, "sale", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        ref: app_schemas_1.AppSchemas.settings.providerConnections,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", String)
], PurchaseSourcingEntity.prototype, "connection", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], PurchaseSourcingEntity.prototype, "idempotencyKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], PurchaseSourcingEntity.prototype, "externalOrderId", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        _id: false,
        required: true,
        type: [PurchaseLineAllocationEntity],
        default: undefined,
        validate: {
            validator: (lines) => Array.isArray(lines) && lines.length > 0,
        },
    }),
    __metadata("design:type", Array)
], PurchaseSourcingEntity.prototype, "allocations", void 0);
exports.PurchaseSourcingEntity = PurchaseSourcingEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PurchaseSourcingEntity);
//# sourceMappingURL=sourcing.entity.js.map