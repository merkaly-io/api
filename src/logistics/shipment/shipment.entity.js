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
exports.LogisticsShipmentEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const shipment_enum_1 = require("./shipment.enum");
const shipment_event_entity_1 = require("./shipment.event.entity");
let LogisticsShipmentEntity = class LogisticsShipmentEntity extends abstract_entity_1.AbstractEntity {
    order;
    purchase;
    direction;
    source;
    trackingNumber;
    carrier;
    trackingUrl;
    shippedAt;
    deliveredAt;
    receivedBy;
    events = [];
    status;
    history = [];
};
exports.LogisticsShipmentEntity = LogisticsShipmentEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.order.sales, required: true, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], LogisticsShipmentEntity.prototype, "order", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, ref: app_schemas_1.AppSchemas.order.purchases, type: mongoose_2.Schema.Types.ObjectId }),
    __metadata("design:type", Function)
], LogisticsShipmentEntity.prototype, "purchase", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: shipment_enum_1.LogisticsShipmentDirectionEnum.OUTBOUND,
        enum: shipment_enum_1.LogisticsShipmentDirectionEnum,
        type: String,
    }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "direction", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shipment_enum_1.LogisticsShipmentSourceEnum, required: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "trackingNumber", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "carrier", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "trackingUrl", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], LogisticsShipmentEntity.prototype, "shippedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, type: Date }),
    __metadata("design:type", Date)
], LogisticsShipmentEntity.prototype, "deliveredAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({
        default: null,
        enum: [...Object.values(shipment_enum_1.LogisticsShipmentSourceEnum), null],
        type: String,
    }),
    __metadata("design:type", String)
], LogisticsShipmentEntity.prototype, "receivedBy", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: () => [], type: [shipment_event_entity_1.LogisticsShipmentEventSchema] }),
    __metadata("design:type", Array)
], LogisticsShipmentEntity.prototype, "events", void 0);
exports.LogisticsShipmentEntity = LogisticsShipmentEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], LogisticsShipmentEntity);
//# sourceMappingURL=shipment.entity.js.map