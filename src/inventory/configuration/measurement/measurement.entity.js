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
exports.ConfigurationMeasurementEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../abstract.entity");
const unit_entity_1 = require("../unit/unit.entity");
let ConfigurationMeasurementEntity = class ConfigurationMeasurementEntity extends abstract_entity_1.AbstractEntity {
    name;
    description;
    active;
    units = [];
};
exports.ConfigurationMeasurementEntity = ConfigurationMeasurementEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, unique: true }),
    __metadata("design:type", String)
], ConfigurationMeasurementEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true }),
    __metadata("design:type", String)
], ConfigurationMeasurementEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true }),
    __metadata("design:type", Boolean)
], ConfigurationMeasurementEntity.prototype, "active", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [unit_entity_1.ConfigurationUnitEntity] }),
    __metadata("design:type", Array)
], ConfigurationMeasurementEntity.prototype, "units", void 0);
exports.ConfigurationMeasurementEntity = ConfigurationMeasurementEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], ConfigurationMeasurementEntity);
//# sourceMappingURL=measurement.entity.js.map