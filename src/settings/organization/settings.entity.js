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
exports.SettingsEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const settings_enum_1 = require("./settings.enum");
const abstract_entity_1 = require("../../abstract.entity");
let SettingsEntity = class SettingsEntity extends abstract_entity_1.AbstractEntity {
    value;
};
exports.SettingsEntity = SettingsEntity;
__decorate([
    (0, mongoose_1.Prop)({ enum: settings_enum_1.SettingsKeyEnum, lowercase: true, required: true, type: String }),
    __metadata("design:type", String)
], SettingsEntity.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, required: true }),
    __metadata("design:type", Object)
], SettingsEntity.prototype, "value", void 0);
exports.SettingsEntity = SettingsEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$subdocument)
], SettingsEntity);
//# sourceMappingURL=settings.entity.js.map