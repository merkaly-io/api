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
exports.OrderSaleEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const customer_entity_1 = require("../../contact/customer/customer.entity");
const sale_item_schema_1 = require("../schemas/sale.item.schema");
const abstract_entity_1 = require("../../abstract.entity");
const transaction_entity_1 = require("../../transaction.entity");
const sale_shipping_entity_1 = require("./sale.shipping.entity");
let OrderSaleEntity = class OrderSaleEntity extends transaction_entity_1.TransactionEntity {
    customer;
    items = [];
    shipping;
    purchases;
};
exports.OrderSaleEntity = OrderSaleEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.contact.customers, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", customer_entity_1.ContactCustomerEntity)
], OrderSaleEntity.prototype, "customer", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: () => [],
        type: [sale_item_schema_1.OrderSaleItemSchema.schema],
        validate: {
            message: 'Sale items cannot be empty',
            validator: (items = []) => items.length > 0,
        },
    }),
    __metadata("design:type", Array)
], OrderSaleEntity.prototype, "items", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: sale_shipping_entity_1.OrderSaleShippingSchema }),
    __metadata("design:type", sale_shipping_entity_1.OrderSaleShippingEntity)
], OrderSaleEntity.prototype, "shipping", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'customerOrder',
            localField: '_id',
            ref: app_schemas_1.AppSchemas.order.purchases,
        },
    }),
    __metadata("design:type", Array)
], OrderSaleEntity.prototype, "purchases", void 0);
exports.OrderSaleEntity = OrderSaleEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], OrderSaleEntity);
//# sourceMappingURL=sale.entity.js.map