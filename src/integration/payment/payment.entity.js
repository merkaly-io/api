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
exports.IntegrationPaymentEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../abstract.entity");
const provider_enum_1 = require("./provider.enum");
const payment_recipient_entity_1 = require("./payment.recipient.entity");
let IntegrationPaymentEntity = class IntegrationPaymentEntity extends abstract_entity_1.AbstractEntity {
    provider;
    recipient;
};
exports.IntegrationPaymentEntity = IntegrationPaymentEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: provider_enum_1.PaymentProviderEnum, required: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentEntity.prototype, "provider", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: payment_recipient_entity_1.IntegrationPaymentRecipientSchema }),
    __metadata("design:type", payment_recipient_entity_1.IntegrationPaymentRecipientEntity)
], IntegrationPaymentEntity.prototype, "recipient", void 0);
exports.IntegrationPaymentEntity = IntegrationPaymentEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], IntegrationPaymentEntity);
//# sourceMappingURL=payment.entity.js.map