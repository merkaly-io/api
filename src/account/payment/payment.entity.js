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
exports.AccountPaymentEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
let AccountPaymentEntity = class AccountPaymentEntity extends abstract_entity_1.AbstractEntity {
    user;
    hash;
    last4;
    brand;
    expMonth;
    expYear;
    holder;
};
exports.AccountPaymentEntity = AccountPaymentEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.account.users, required: true, type: String }),
    __metadata("design:type", Object)
], AccountPaymentEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, unique: true }),
    __metadata("design:type", String)
], AccountPaymentEntity.prototype, "hash", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, maxlength: 4, minlength: 4 }),
    __metadata("design:type", String)
], AccountPaymentEntity.prototype, "last4", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AccountPaymentEntity.prototype, "brand", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, min: 1, max: 12 }),
    __metadata("design:type", Number)
], AccountPaymentEntity.prototype, "expMonth", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Number, min: 2000 }),
    __metadata("design:type", Number)
], AccountPaymentEntity.prototype, "expYear", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String, uppercase: true, trim: true }),
    __metadata("design:type", String)
], AccountPaymentEntity.prototype, "holder", void 0);
exports.AccountPaymentEntity = AccountPaymentEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], AccountPaymentEntity);
//# sourceMappingURL=payment.entity.js.map