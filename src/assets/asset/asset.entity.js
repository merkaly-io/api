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
exports.AssetEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const asset_enum_1 = require("../enums/asset.enum");
const abstract_entity_1 = require("../../../infrastructure/abstracts/abstract.entity");
let AssetEntity = class AssetEntity extends abstract_entity_1.AbstractEntity {
    name;
    url;
    alt;
    weak;
    type;
    size;
};
exports.AssetEntity = AssetEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AssetEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: String }),
    __metadata("design:type", String)
], AssetEntity.prototype, "url", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => '', trim: true, type: String }),
    __metadata("design:type", String)
], AssetEntity.prototype, "alt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: true, type: Boolean }),
    __metadata("design:type", Boolean)
], AssetEntity.prototype, "weak", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: asset_enum_1.AssetType, required: true, type: String }),
    __metadata("design:type", String)
], AssetEntity.prototype, "type", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: 0, required: true, type: Number }),
    __metadata("design:type", Number)
], AssetEntity.prototype, "size", void 0);
exports.AssetEntity = AssetEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], AssetEntity);
//# sourceMappingURL=asset.entity.js.map