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
exports.PurchaseVendorEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
let PurchaseVendorEntity = class PurchaseVendorEntity extends abstract_entity_1.AbstractEntity {
    name;
    description;
    email;
    phone;
    website;
    logo;
    taxId;
    active;
};
exports.PurchaseVendorEntity = PurchaseVendorEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "website", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "logo", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], PurchaseVendorEntity.prototype, "taxId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], PurchaseVendorEntity.prototype, "active", void 0);
exports.PurchaseVendorEntity = PurchaseVendorEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], PurchaseVendorEntity);
//# sourceMappingURL=vendor.entity.js.map