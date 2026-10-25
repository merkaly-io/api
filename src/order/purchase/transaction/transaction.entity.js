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
exports.PurchaseTransactionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const item_schema_1 = require("../schemas/item.schema");
const abstract_entity_1 = require("../../../abstract.entity");
const transaction_entity_1 = require("../../../transaction.entity");
const vendor_entity_1 = require("../vendor/vendor.entity");
let PurchaseTransactionEntity = class PurchaseTransactionEntity extends transaction_entity_1.TransactionEntity {
    vendor;
    items = [];
};
exports.PurchaseTransactionEntity = PurchaseTransactionEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.order.purchase.vendors, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", vendor_entity_1.PurchaseVendorEntity)
], PurchaseTransactionEntity.prototype, "vendor", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: () => [],
        type: [item_schema_1.PurchaseItemSchema.schema],
        validate: {
            message: 'Purchase items cannot be empty',
            validator: (items = []) => items.length > 0,
        },
    }),
    __metadata("design:type", Array)
], PurchaseTransactionEntity.prototype, "items", void 0);
exports.PurchaseTransactionEntity = PurchaseTransactionEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], PurchaseTransactionEntity);
//# sourceMappingURL=transaction.entity.js.map