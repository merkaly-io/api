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
exports.AccountAddressEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const app_schemas_1 = require("../../app.schemas");
const abstract_entity_1 = require("../../abstract.entity");
const address_entity_1 = require("../../address.entity");
let AccountAddressEntity = class AccountAddressEntity extends address_entity_1.AddressEntity {
    user;
};
exports.AccountAddressEntity = AccountAddressEntity;
__decorate([
    (0, mongoose_1.Prop)({ ref: app_schemas_1.AppSchemas.account.users, required: true, type: String }),
    __metadata("design:type", Object)
], AccountAddressEntity.prototype, "user", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true }),
    __metadata("design:type", String)
], AccountAddressEntity.prototype, "name", void 0);
exports.AccountAddressEntity = AccountAddressEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$collection)
], AccountAddressEntity);
//# sourceMappingURL=address.entity.js.map