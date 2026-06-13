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
exports.CatalogCollectionEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../../app.schemas");
const abstract_entity_1 = require("../../../abstract.entity");
let CatalogCollectionEntity = class CatalogCollectionEntity extends abstract_entity_1.AbstractEntity {
    name;
    description;
    products = [];
};
exports.CatalogCollectionEntity = CatalogCollectionEntity;
__decorate([
    (0, mongoose_1.Prop)({ length: 32, required: true, trim: true, type: String }),
    __metadata("design:type", String)
], CatalogCollectionEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, default: '' }),
    __metadata("design:type", String)
], CatalogCollectionEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: [],
        ref: app_schemas_1.AppSchemas.inventory.catalog.products,
        type: [{ type: mongoose_2.Schema.Types.ObjectId }],
    }),
    __metadata("design:type", Array)
], CatalogCollectionEntity.prototype, "products", void 0);
exports.CatalogCollectionEntity = CatalogCollectionEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], CatalogCollectionEntity);
//# sourceMappingURL=collection.entity.js.map