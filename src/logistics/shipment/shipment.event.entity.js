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
exports.LogisticsShipmentEventSchema = exports.LogisticsShipmentEventEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const shipment_enum_1 = require("./shipment.enum");
let LogisticsShipmentEventEntity = class LogisticsShipmentEventEntity {
    at;
    code;
    description;
    location;
};
exports.LogisticsShipmentEventEntity = LogisticsShipmentEventEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], LogisticsShipmentEventEntity.prototype, "at", void 0);
__decorate([
    (0, mongoose_1.Prop)({ enum: shipment_enum_1.LogisticsTrackingEventCodeEnum, required: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEventEntity.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: '', trim: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEventEntity.prototype, "description", void 0);
__decorate([
    (0, mongoose_1.Prop)({ default: null, trim: true, type: String }),
    __metadata("design:type", String)
], LogisticsShipmentEventEntity.prototype, "location", void 0);
exports.LogisticsShipmentEventEntity = LogisticsShipmentEventEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false, timestamps: false, versionKey: false })
], LogisticsShipmentEventEntity);
exports.LogisticsShipmentEventSchema = mongoose_1.SchemaFactory.createForClass(LogisticsShipmentEventEntity);
//# sourceMappingURL=shipment.event.entity.js.map