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
exports.IntegrationPaymentConnectionSchema = exports.IntegrationPaymentConnectionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let IntegrationPaymentConnectionEntity = class IntegrationPaymentConnectionEntity {
    account;
    userId;
    publicKey;
    liveMode;
    scope;
    accessToken;
    refreshToken;
    expiresAt;
    connectedAt;
};
exports.IntegrationPaymentConnectionEntity = IntegrationPaymentConnectionEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "account", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "userId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "publicKey", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], IntegrationPaymentConnectionEntity.prototype, "liveMode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "scope", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, select: false, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "accessToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, select: false, type: String }),
    __metadata("design:type", String)
], IntegrationPaymentConnectionEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentConnectionEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationPaymentConnectionEntity.prototype, "connectedAt", void 0);
exports.IntegrationPaymentConnectionEntity = IntegrationPaymentConnectionEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationPaymentConnectionEntity);
exports.IntegrationPaymentConnectionSchema = mongoose_1.SchemaFactory.createForClass(IntegrationPaymentConnectionEntity);
//# sourceMappingURL=payment.connection.entity.js.map