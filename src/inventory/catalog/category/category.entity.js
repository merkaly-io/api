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
exports.CatalogCategoryEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const abstract_entity_1 = require("../../../abstract.entity");
const relation_status_enum_1 = require("../../../relation.status.enum");
const productsRef = app_schemas_1.AppSchemas.inventory.catalog.products;
const categoriesRef = app_schemas_1.AppSchemas.inventory.catalog.categories;
let CatalogCategoryEntity = class CatalogCategoryEntity extends abstract_entity_1.AbstractEntity {
    name;
    description;
    parent;
    children = [];
    products = [];
    status;
};
exports.CatalogCategoryEntity = CatalogCategoryEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogCategoryEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], CatalogCategoryEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ ref: categoriesRef, type: mongoose_2.Types.ObjectId, default: null }),
    __metadata("design:type", CatalogCategoryEntity)
], CatalogCategoryEntity.prototype, "parent", void 0);
__decorate([
    (0, mongoose_1.Virtual)({ options: { foreignField: 'parent', localField: '_id', ref: categoriesRef } }),
    __metadata("design:type", Array)
], CatalogCategoryEntity.prototype, "children", void 0);
__decorate([
    (0, mongoose_1.Virtual)({ options: { foreignField: 'category', localField: '_id', ref: productsRef } }),
    __metadata("design:type", Array)
], CatalogCategoryEntity.prototype, "products", void 0);
__decorate([
    (0, mongoose_1.Virtual)({
        get: function () {
            return Array.isArray(this.products) && this.products.length > 0
                ? relation_status_enum_1.CatalogRelationStatusEnum.IN_USE
                : relation_status_enum_1.CatalogRelationStatusEnum.EMPTY;
        },
    }),
    __metadata("design:type", String)
], CatalogCategoryEntity.prototype, "status", void 0);
exports.CatalogCategoryEntity = CatalogCategoryEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogCategoryEntity);
//# sourceMappingURL=category.entity.js.map