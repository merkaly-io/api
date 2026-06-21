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
exports.StockTransferEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const user_entity_1 = require("../../../account/user/user.entity");
const warehouse_entity_1 = require("../warehouse/warehouse.entity");
const transfer_enum_1 = require("./transfer.enum");
const abstract_entity_1 = require("../../../abstract.entity");
const transfer_item_schema_1 = require("../schemas/transfer.item.schema");
let StockTransferEntity = class StockTransferEntity extends abstract_entity_1.AbstractEntity {
    origin;
    destination;
    items = [];
    notes;
    user;
    history = [];
    status;
    number;
    capabilities;
    isProcessable;
};
exports.StockTransferEntity = StockTransferEntity;
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.stock.warehouses,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", warehouse_entity_1.StockWarehouseEntity)
], StockTransferEntity.prototype, "origin", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        ref: app_schemas_1.AppSchemas.inventory.stock.warehouses,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", warehouse_entity_1.StockWarehouseEntity)
], StockTransferEntity.prototype, "destination", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: () => [],
        type: [transfer_item_schema_1.TransferItemSchema.schema],
        validate: {
            message: 'Transfers items cannot be empty',
            validator: (items = []) => items.length > 0,
        },
    }),
    __metadata("design:type", Array)
], StockTransferEntity.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true }),
    __metadata("design:type", String)
], StockTransferEntity.prototype, "notes", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.account.users, type: String }),
    __metadata("design:type", user_entity_1.AccountUserEntity)
], StockTransferEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const pending = this.status === transfer_enum_1.TransferStatusEnum.PENDING;
            return {
                addItems: pending,
                cancel: pending,
                complete: pending && this.isProcessable,
                deleteItems: pending && this.items.length > 1,
                editItems: pending,
            };
        },
    }),
    __metadata("design:type", Object)
], StockTransferEntity.prototype, "capabilities", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return this.items.every((it) => it.isProcessable === true);
        },
    }),
    __metadata("design:type", Boolean)
], StockTransferEntity.prototype, "isProcessable", void 0);
exports.StockTransferEntity = StockTransferEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], StockTransferEntity);
//# sourceMappingURL=transfer.entity.js.map