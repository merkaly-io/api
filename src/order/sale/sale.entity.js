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
exports.OrderSaleEntity = exports.OrderSaleDeliverySchema = exports.OrderSaleDeliveryEntity = exports.OrderSaleDeliveryLineSchema = exports.OrderSaleDeliveryLineEntity = exports.OrderSaleDeliveryDaysSchema = exports.OrderSaleDeliveryDaysEntity = exports.OrderSaleDeliveryAddressSchema = exports.OrderSaleDeliveryAddressEntity = exports.OrderSaleDeliveryRecipientSchema = exports.OrderSaleDeliveryRecipientEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const customer_entity_1 = require("../../contact/customer/customer.entity");
const sale_item_schema_1 = require("../schemas/sale.item.schema");
const abstract_entity_1 = require("../../abstract.entity");
const transaction_entity_1 = require("../../transaction.entity");
const purchase_enum_1 = require("../purchase/purchase.enum");
const sale_enum_1 = require("./sale.enum");
let OrderSaleDeliveryRecipientEntity = class OrderSaleDeliveryRecipientEntity {
    name;
    email;
    phone;
    document;
    birthday;
};
exports.OrderSaleDeliveryRecipientEntity = OrderSaleDeliveryRecipientEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryRecipientEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryRecipientEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryRecipientEntity.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryRecipientEntity.prototype, "document", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryRecipientEntity.prototype, "birthday", void 0);
exports.OrderSaleDeliveryRecipientEntity = OrderSaleDeliveryRecipientEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleDeliveryRecipientEntity);
exports.OrderSaleDeliveryRecipientSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleDeliveryRecipientEntity);
let OrderSaleDeliveryAddressEntity = class OrderSaleDeliveryAddressEntity {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
    country;
};
exports.OrderSaleDeliveryAddressEntity = OrderSaleDeliveryAddressEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "complement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, uppercase: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, uppercase: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryAddressEntity.prototype, "country", void 0);
exports.OrderSaleDeliveryAddressEntity = OrderSaleDeliveryAddressEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleDeliveryAddressEntity);
exports.OrderSaleDeliveryAddressSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleDeliveryAddressEntity);
const isCents = (value) => value === null || Number.isSafeInteger(value);
let OrderSaleDeliveryDaysEntity = class OrderSaleDeliveryDaysEntity {
    min;
    max;
};
exports.OrderSaleDeliveryDaysEntity = OrderSaleDeliveryDaysEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Number }),
    __metadata("design:type", Number)
], OrderSaleDeliveryDaysEntity.prototype, "min", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Number }),
    __metadata("design:type", Number)
], OrderSaleDeliveryDaysEntity.prototype, "max", void 0);
exports.OrderSaleDeliveryDaysEntity = OrderSaleDeliveryDaysEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleDeliveryDaysEntity);
exports.OrderSaleDeliveryDaysSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleDeliveryDaysEntity);
let OrderSaleDeliveryLineEntity = class OrderSaleDeliveryLineEntity {
    variant;
    amount;
    method;
    deliveryDays;
};
exports.OrderSaleDeliveryLineEntity = OrderSaleDeliveryLineEntity;
__decorate([
    (0, mongoose_1.Prop)({
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", String)
], OrderSaleDeliveryLineEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, validate: { validator: isCents } }),
    __metadata("design:type", Number)
], OrderSaleDeliveryLineEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleDeliveryLineEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.OrderSaleDeliveryDaysSchema }),
    __metadata("design:type", OrderSaleDeliveryDaysEntity)
], OrderSaleDeliveryLineEntity.prototype, "deliveryDays", void 0);
exports.OrderSaleDeliveryLineEntity = OrderSaleDeliveryLineEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleDeliveryLineEntity);
exports.OrderSaleDeliveryLineSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleDeliveryLineEntity);
let OrderSaleDeliveryEntity = class OrderSaleDeliveryEntity {
    recipient;
    address;
    fee;
    quotedAt;
    lines;
};
exports.OrderSaleDeliveryEntity = OrderSaleDeliveryEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.OrderSaleDeliveryRecipientSchema }),
    __metadata("design:type", OrderSaleDeliveryRecipientEntity)
], OrderSaleDeliveryEntity.prototype, "recipient", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.OrderSaleDeliveryAddressSchema }),
    __metadata("design:type", OrderSaleDeliveryAddressEntity)
], OrderSaleDeliveryEntity.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, validate: { validator: isCents } }),
    __metadata("design:type", Number)
], OrderSaleDeliveryEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderSaleDeliveryEntity.prototype, "quotedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.OrderSaleDeliveryLineSchema] }),
    __metadata("design:type", Array)
], OrderSaleDeliveryEntity.prototype, "lines", void 0);
exports.OrderSaleDeliveryEntity = OrderSaleDeliveryEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleDeliveryEntity);
exports.OrderSaleDeliverySchema = mongoose_1.SchemaFactory.createForClass(OrderSaleDeliveryEntity);
let OrderSaleEntity = class OrderSaleEntity extends transaction_entity_1.TransactionEntity {
    customer;
    items = [];
    delivery;
    cancelledAt;
    source;
    purchases;
    cost;
    profit;
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
    (0, mongoose_1.Prop)({ default: null, type: exports.OrderSaleDeliverySchema }),
    __metadata("design:type", OrderSaleDeliveryEntity)
], OrderSaleEntity.prototype, "delivery", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderSaleEntity.prototype, "cancelledAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: sale_enum_1.OrderSaleSourceEnum, required: true, type: String }),
    __metadata("design:type", String)
], OrderSaleEntity.prototype, "source", void 0);
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
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            if (!Array.isArray(this.purchases))
                return undefined;
            if (this.status === sale_enum_1.OrderSaleStatusEnum.CANCELLED)
                return null;
            const live = this.purchases.filter((it) => !it.deletedAt && it.status !== purchase_enum_1.OrderPurchaseStatusEnum.CANCELLED);
            if (!live.length)
                return null;
            return live.reduce((sum, it) => sum + it.pricing.subtotal + (it.freight ?? 0), 0);
        },
    }),
    __metadata("design:type", Number)
], OrderSaleEntity.prototype, "cost", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            const cost = this.cost;
            return cost == null ? cost : this.pricing.total - cost;
        },
    }),
    __metadata("design:type", Number)
], OrderSaleEntity.prototype, "profit", void 0);
exports.OrderSaleEntity = OrderSaleEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], OrderSaleEntity);
//# sourceMappingURL=sale.entity.js.map