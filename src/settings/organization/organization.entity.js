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
exports.SettingsOrganizationEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const organization_enum_1 = require("../enums/organization.enum");
const abstract_entity_1 = require("../../../infrastructure/abstracts/abstract.entity");
let SettingsOrganizationEntity = class SettingsOrganizationEntity extends abstract_entity_1.AbstractEntity {
    value;
};
exports.SettingsOrganizationEntity = SettingsOrganizationEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: organization_enum_1.SettingsOrganizationEnum, lowercase: true, required: true, type: String }),
    __metadata("design:type", String)
], SettingsOrganizationEntity.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, required: true }),
    __metadata("design:type", Object)
], SettingsOrganizationEntity.prototype, "value", void 0);
exports.SettingsOrganizationEntity = SettingsOrganizationEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$subdocument)
], SettingsOrganizationEntity);
//# sourceMappingURL=organization.entity.js.map