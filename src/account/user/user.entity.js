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
exports.AccountUserEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const abstract_entity_1 = require("../../../infrastructure/abstracts/abstract.entity");
let AccountUserEntity = class AccountUserEntity extends abstract_entity_1.AbstractEntity {
    name;
    picture;
    email;
    phone;
    role;
    status;
    verified;
    providers;
    locale;
    lastIp;
    loginAt;
};
exports.AccountUserEntity = AccountUserEntity;
__decorate([
    (0, mongoose_1.Prop)({ type: String, required: true }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "_id", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "picture", void 0);
__decorate([
    (0, mongoose_1.Prop)({ lowercase: true, type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "email", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "phone", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "role", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, enum: ['active', 'blocked', 'disabled'], default: 'active' }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Boolean }),
    __metadata("design:type", Boolean)
], AccountUserEntity.prototype, "verified", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: [String], default: [] }),
    __metadata("design:type", Array)
], AccountUserEntity.prototype, "providers", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "locale", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String }),
    __metadata("design:type", String)
], AccountUserEntity.prototype, "lastIp", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], AccountUserEntity.prototype, "loginAt", void 0);
exports.AccountUserEntity = AccountUserEntity = __decorate([
    (0, mongoose_1.Schema)(abstract_entity_1.$subdocument)
], AccountUserEntity);
//# sourceMappingURL=user.entity.js.map