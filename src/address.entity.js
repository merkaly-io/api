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
exports.AddressEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const abstract_entity_1 = require("../abstracts/abstract.entity");
class AddressEntity extends abstract_entity_1.AbstractEntity {
    line1;
    line2;
    name;
    city;
    state;
    locality;
    country;
    code;
    location;
}
exports.AddressEntity = AddressEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "line1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "line2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "state", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "locality", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "country", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: false, trim: true, type: mongoose_2.Schema.Types.String }),
    __metadata("design:type", String)
], AddressEntity.prototype, "code", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Mixed, default: { lat: 0, lng: 0 } }),
    __metadata("design:type", Object)
], AddressEntity.prototype, "location", void 0);
//# sourceMappingURL=address.entity.js.map