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
exports.OrderSaleShippingSchema = exports.OrderSaleShippingEntity = exports.OrderSaleShippingLineSchema = exports.OrderSaleShippingLineEntity = exports.OrderSaleShippingDaysSchema = exports.OrderSaleShippingDaysEntity = exports.OrderSaleShippingAddressSchema = exports.OrderSaleShippingAddressEntity = exports.OrderSaleShippingRecipientSchema = exports.OrderSaleShippingRecipientEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
let OrderSaleShippingRecipientEntity = class OrderSaleShippingRecipientEntity {
    name;
    email;
    phone;
    document;
    birthday;
};
exports.OrderSaleShippingRecipientEntity = OrderSaleShippingRecipientEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingRecipientEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingRecipientEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingRecipientEntity.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingRecipientEntity.prototype, "document", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingRecipientEntity.prototype, "birthday", void 0);
exports.OrderSaleShippingRecipientEntity = OrderSaleShippingRecipientEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingRecipientEntity);
exports.OrderSaleShippingRecipientSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingRecipientEntity);
let OrderSaleShippingAddressEntity = class OrderSaleShippingAddressEntity {
    postalCode;
    street;
    number;
    complement;
    district;
    city;
    state;
    country;
};
exports.OrderSaleShippingAddressEntity = OrderSaleShippingAddressEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "street", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "number", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "complement", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "district", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, uppercase: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, uppercase: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingAddressEntity.prototype, "country", void 0);
exports.OrderSaleShippingAddressEntity = OrderSaleShippingAddressEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingAddressEntity);
exports.OrderSaleShippingAddressSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingAddressEntity);
const isCents = (value) => value === null || Number.isSafeInteger(value);
let OrderSaleShippingDaysEntity = class OrderSaleShippingDaysEntity {
    min;
    max;
};
exports.OrderSaleShippingDaysEntity = OrderSaleShippingDaysEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Number }),
    __metadata("design:type", Number)
], OrderSaleShippingDaysEntity.prototype, "min", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Number }),
    __metadata("design:type", Number)
], OrderSaleShippingDaysEntity.prototype, "max", void 0);
exports.OrderSaleShippingDaysEntity = OrderSaleShippingDaysEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingDaysEntity);
exports.OrderSaleShippingDaysSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingDaysEntity);
let OrderSaleShippingLineEntity = class OrderSaleShippingLineEntity {
    variant;
    amount;
    method;
    deliveryDays;
};
exports.OrderSaleShippingLineEntity = OrderSaleShippingLineEntity;
__decorate([
    (0, mongoose_1.Prop)({
        ref: app_schemas_1.AppSchemas.inventory.catalog.variants,
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", String)
], OrderSaleShippingLineEntity.prototype, "variant", void 0);
__decorate([
    (0, mongoose_1.Prop)({ min: 0, required: true, type: Number, validate: { validator: isCents } }),
    __metadata("design:type", Number)
], OrderSaleShippingLineEntity.prototype, "amount", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], OrderSaleShippingLineEntity.prototype, "method", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: exports.OrderSaleShippingDaysSchema }),
    __metadata("design:type", OrderSaleShippingDaysEntity)
], OrderSaleShippingLineEntity.prototype, "deliveryDays", void 0);
exports.OrderSaleShippingLineEntity = OrderSaleShippingLineEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingLineEntity);
exports.OrderSaleShippingLineSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingLineEntity);
let OrderSaleShippingEntity = class OrderSaleShippingEntity {
    recipient;
    address;
    fee;
    quotedAt;
    lines;
};
exports.OrderSaleShippingEntity = OrderSaleShippingEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.OrderSaleShippingRecipientSchema }),
    __metadata("design:type", OrderSaleShippingRecipientEntity)
], OrderSaleShippingEntity.prototype, "recipient", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: exports.OrderSaleShippingAddressSchema }),
    __metadata("design:type", OrderSaleShippingAddressEntity)
], OrderSaleShippingEntity.prototype, "address", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, min: 0, type: Number, validate: { validator: isCents } }),
    __metadata("design:type", Number)
], OrderSaleShippingEntity.prototype, "fee", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], OrderSaleShippingEntity.prototype, "quotedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [exports.OrderSaleShippingLineSchema] }),
    __metadata("design:type", Array)
], OrderSaleShippingEntity.prototype, "lines", void 0);
exports.OrderSaleShippingEntity = OrderSaleShippingEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingEntity);
exports.OrderSaleShippingSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingEntity);
//# sourceMappingURL=sale.shipping.entity.js.map