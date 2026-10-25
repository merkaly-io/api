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
exports.PurchaseApprovalEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const approval_enum_1 = require("./approval.enum");
let PurchaseApprovalEntity = class PurchaseApprovalEntity {
    status;
    quoteVersion;
    actor;
    decidedAt;
};
exports.PurchaseApprovalEntity = PurchaseApprovalEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, enum: approval_enum_1.PurchaseApprovalStatus, type: String }),
    __metadata("design:type", String)
], PurchaseApprovalEntity.prototype, "status", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], PurchaseApprovalEntity.prototype, "quoteVersion", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: String, trim: true }),
    __metadata("design:type", String)
], PurchaseApprovalEntity.prototype, "actor", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: Date }),
    __metadata("design:type", Date)
], PurchaseApprovalEntity.prototype, "decidedAt", void 0);
exports.PurchaseApprovalEntity = PurchaseApprovalEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], PurchaseApprovalEntity);
//# sourceMappingURL=approval.entity.js.map