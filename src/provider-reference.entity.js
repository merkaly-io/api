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
exports.ProviderSkuReferenceEntity = exports.ProviderProductReferenceEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
let ProviderProductReferenceEntity = class ProviderProductReferenceEntity {
    connection;
    externalProductId;
};
exports.ProviderProductReferenceEntity = ProviderProductReferenceEntity;
__decorate([
    (0, mongoose_1.Prop)({
        required: true,
        type: mongoose_2.Schema.Types.ObjectId,
    }),
    __metadata("design:type", String)
], ProviderProductReferenceEntity.prototype, "connection", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], ProviderProductReferenceEntity.prototype, "externalProductId", void 0);
exports.ProviderProductReferenceEntity = ProviderProductReferenceEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ProviderProductReferenceEntity);
let ProviderSkuReferenceEntity = class ProviderSkuReferenceEntity extends ProviderProductReferenceEntity {
    externalSkuId;
};
exports.ProviderSkuReferenceEntity = ProviderSkuReferenceEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], ProviderSkuReferenceEntity.prototype, "externalSkuId", void 0);
exports.ProviderSkuReferenceEntity = ProviderSkuReferenceEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], ProviderSkuReferenceEntity);
//# sourceMappingURL=provider-reference.entity.js.map