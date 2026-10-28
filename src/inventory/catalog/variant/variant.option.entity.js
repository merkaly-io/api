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
exports.CatalogVariantOptionSchema = exports.CatalogVariantOptionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
let CatalogVariantOptionEntity = class CatalogVariantOptionEntity {
    name;
    value;
    label;
    externalNameId;
    externalValueId;
};
exports.CatalogVariantOptionEntity = CatalogVariantOptionEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantOptionEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantOptionEntity.prototype, "value", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogVariantOptionEntity.prototype, "label", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], CatalogVariantOptionEntity.prototype, "externalNameId", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: String }),
    __metadata("design:type", String)
], CatalogVariantOptionEntity.prototype, "externalValueId", void 0);
exports.CatalogVariantOptionEntity = CatalogVariantOptionEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], CatalogVariantOptionEntity);
exports.CatalogVariantOptionSchema = mongoose_1.SchemaFactory.createForClass(CatalogVariantOptionEntity);
//# sourceMappingURL=variant.option.entity.js.map