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
exports.ConfigurationUnitEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
let ConfigurationUnitEntity = class ConfigurationUnitEntity extends abstract_entity_1.AbstractEntity {
    name;
    symbol;
    description;
    active;
    isBaseUnit;
};
exports.ConfigurationUnitEntity = ConfigurationUnitEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], ConfigurationUnitEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], ConfigurationUnitEntity.prototype, "symbol", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true }),
    __metadata("design:type", String)
], ConfigurationUnitEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ConfigurationUnitEntity.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: false }),
    __metadata("design:type", Boolean)
], ConfigurationUnitEntity.prototype, "isBaseUnit", void 0);
exports.ConfigurationUnitEntity = ConfigurationUnitEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$subdocument)
], ConfigurationUnitEntity);
//# sourceMappingURL=unit.entity.js.map