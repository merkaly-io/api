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
exports.OrderPurchaseEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const vendor_entity_1 = require("../../contact/vendor/vendor.entity");
const purchase_item_schema_1 = require("../schemas/purchase.item.schema");
const abstract_entity_1 = require("../../abstract.entity");
const transaction_entity_1 = require("../../transaction.entity");
const purchase_supplier_order_entity_1 = require("./purchase.supplier.order.entity");
let OrderPurchaseEntity = class OrderPurchaseEntity extends transaction_entity_1.TransactionEntity {
    vendor;
    customerOrder;
    items = [];
    freight;
    supplierOrder;
};
exports.OrderPurchaseEntity = OrderPurchaseEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.contact.vendors, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", vendor_entity_1.ContactVendorEntity)
], OrderPurchaseEntity.prototype, "vendor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.order.sales, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], OrderPurchaseEntity.prototype, "customerOrder", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: () => [],
        type: [purchase_item_schema_1.OrderPurchaseItemSchema.schema],
        validate: {
            message: 'Purchase items cannot be empty',
            validator: (items = []) => items.length > 0,
        },
    }),
    __metadata("design:type", Array)
], OrderPurchaseEntity.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        min: 0,
        type: Number,
        validate: { validator: (value) => value == null || Number.isInteger(value) },
    }),
    __metadata("design:type", Number)
], OrderPurchaseEntity.prototype, "freight", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: purchase_supplier_order_entity_1.OrderPurchaseSupplierOrderSchema }),
    __metadata("design:type", purchase_supplier_order_entity_1.OrderPurchaseSupplierOrderEntity)
], OrderPurchaseEntity.prototype, "supplierOrder", void 0);
exports.OrderPurchaseEntity = OrderPurchaseEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], OrderPurchaseEntity);
//# sourceMappingURL=purchase.entity.js.map