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
exports.SupplierSourceEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../abstract.entity");
const provider_enum_1 = require("./provider.enum");
let SupplierSourceEntity = class SupplierSourceEntity extends abstract_entity_1.AbstractEntity {
    provider;
};
exports.SupplierSourceEntity = SupplierSourceEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: provider_enum_1.SupplierProviderEnum, required: true, type: String }),
    __metadata("design:type", String)
], SupplierSourceEntity.prototype, "provider", void 0);
exports.SupplierSourceEntity = SupplierSourceEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], SupplierSourceEntity);
//# sourceMappingURL=source.entity.js.map