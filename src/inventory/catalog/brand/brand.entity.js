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
exports.CatalogBrandEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const app_schemas_1 = require("../../../../app.schemas");
const abstract_entity_1 = require("../../../../infrastructure/abstracts/abstract.entity");
const relation_status_enum_1 = require("../enums/relation.status.enum");
let CatalogBrandEntity = class CatalogBrandEntity extends abstract_entity_1.AbstractEntity {
    name;
    description;
    products = [];
    status;
};
exports.CatalogBrandEntity = CatalogBrandEntity;
__decorate([
    (0, mongoose_1.Prop)({ length: 32, required: true, trim: true, type: String, unique: true }),
    __metadata("design:type", String)
], CatalogBrandEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], CatalogBrandEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        options: {
            foreignField: 'brand',
            localField: '_id',
            ref: app_schemas_1.AppSchemas.inventory.catalog.products,
        },
    }),
    __metadata("design:type", Array)
], CatalogBrandEntity.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return Array.isArray(this.products) && this.products.length > 0
                ? relation_status_enum_1.CatalogRelationStatusEnum.IN_USE
                : relation_status_enum_1.CatalogRelationStatusEnum.EMPTY;
        },
    }),
    __metadata("design:type", String)
], CatalogBrandEntity.prototype, "status", void 0);
exports.CatalogBrandEntity = CatalogBrandEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogBrandEntity);
//# sourceMappingURL=brand.entity.js.map