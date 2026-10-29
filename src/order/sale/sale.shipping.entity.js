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
exports.OrderSaleShippingSchema = exports.OrderSaleShippingEntity = exports.OrderSaleShippingAddressSchema = exports.OrderSaleShippingAddressEntity = exports.OrderSaleShippingRecipientSchema = exports.OrderSaleShippingRecipientEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let OrderSaleShippingRecipientEntity = class OrderSaleShippingRecipientEntity {
    name;
    email;
    phone;
    document;
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
let OrderSaleShippingEntity = class OrderSaleShippingEntity {
    recipient;
    address;
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
exports.OrderSaleShippingEntity = OrderSaleShippingEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], OrderSaleShippingEntity);
exports.OrderSaleShippingSchema = mongoose_1.SchemaFactory.createForClass(OrderSaleShippingEntity);
//# sourceMappingURL=sale.shipping.entity.js.map