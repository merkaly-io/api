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
exports.SaleDeliveryEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const delivery_enum_1 = require("./delivery.enum");
let SaleDeliveryEntity = class SaleDeliveryEntity {
    status;
    observedAt;
    trackingReference;
};
exports.SaleDeliveryEntity = SaleDeliveryEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: delivery_enum_1.SaleDeliveryStatus, type: String }),
    __metadata("design:type", String)
], SaleDeliveryEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], SaleDeliveryEntity.prototype, "observedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], SaleDeliveryEntity.prototype, "trackingReference", void 0);
exports.SaleDeliveryEntity = SaleDeliveryEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SaleDeliveryEntity);
//# sourceMappingURL=delivery.entity.js.map