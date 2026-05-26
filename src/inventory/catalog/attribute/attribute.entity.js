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
exports.CatalogAttributeEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
let CatalogAttributeEntity = class CatalogAttributeEntity extends abstract_entity_1.AbstractEntity {
    name;
    values;
    active;
};
exports.CatalogAttributeEntity = CatalogAttributeEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, unique: true }),
    __metadata("design:type", String)
], CatalogAttributeEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], CatalogAttributeEntity.prototype, "values", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], CatalogAttributeEntity.prototype, "active", void 0);
exports.CatalogAttributeEntity = CatalogAttributeEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogAttributeEntity);
//# sourceMappingURL=attribute.entity.js.map