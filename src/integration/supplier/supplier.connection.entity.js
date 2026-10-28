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
exports.IntegrationSupplierConnectionSchema = exports.IntegrationSupplierConnectionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let IntegrationSupplierConnectionEntity = class IntegrationSupplierConnectionEntity {
    account;
    accessToken;
    refreshToken;
    expiresAt;
    refreshExpiresAt;
    connectedAt;
};
exports.IntegrationSupplierConnectionEntity = IntegrationSupplierConnectionEntity;
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], IntegrationSupplierConnectionEntity.prototype, "account", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, select: false, type: String }),
    __metadata("design:type", String)
], IntegrationSupplierConnectionEntity.prototype, "accessToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, select: false, type: String }),
    __metadata("design:type", String)
], IntegrationSupplierConnectionEntity.prototype, "refreshToken", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationSupplierConnectionEntity.prototype, "expiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationSupplierConnectionEntity.prototype, "refreshExpiresAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], IntegrationSupplierConnectionEntity.prototype, "connectedAt", void 0);
exports.IntegrationSupplierConnectionEntity = IntegrationSupplierConnectionEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], IntegrationSupplierConnectionEntity);
exports.IntegrationSupplierConnectionSchema = mongoose_1.SchemaFactory.createForClass(IntegrationSupplierConnectionEntity);
//# sourceMappingURL=supplier.connection.entity.js.map