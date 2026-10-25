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
exports.SupplierOfferEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const money_entity_1 = require("../../../money.entity");
const supplier_availability_enum_1 = require("./supplier-availability.enum");
let SupplierOfferEntity = class SupplierOfferEntity {
    unitCost;
    availability;
    observedAt;
};
exports.SupplierOfferEntity = SupplierOfferEntity;
__decorate([
    (0, mongoose_1.Prop)({ _id: false, type: money_entity_1.MoneyEntity }),
    __metadata("design:type", money_entity_1.MoneyEntity)
], SupplierOfferEntity.prototype, "unitCost", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: supplier_availability_enum_1.SupplierAvailability, type: String }),
    __metadata("design:type", String)
], SupplierOfferEntity.prototype, "availability", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, type: Date }),
    __metadata("design:type", Date)
], SupplierOfferEntity.prototype, "observedAt", void 0);
exports.SupplierOfferEntity = SupplierOfferEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], SupplierOfferEntity);
//# sourceMappingURL=supplier-offer.entity.js.map