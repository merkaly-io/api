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
exports.AbstractEntity = exports.$subdocument = exports.$collection = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
exports.$collection = {
    timestamps: true,
    toJSON: { getters: true, versionKey: false, virtuals: true },
    toObject: { getters: true, versionKey: false, virtuals: true },
    virtuals: true,
};
exports.$subdocument = {
    _id: true,
    toJSON: { getters: true, versionKey: false, virtuals: true },
    toObject: { getters: true, versionKey: false, virtuals: true },
    virtuals: true,
};
class AbstractEntity extends mongoose_2.Document {
    createdAt;
    updatedAt;
    deletedAt;
    toString() {
        return this._id;
    }
}
exports.AbstractEntity = AbstractEntity;
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "createdAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "updatedAt", void 0);
__decorate([
    (0, mongoose_1.Prop)({ type: mongoose_2.Schema.Types.Date }),
    __metadata("design:type", Date)
], AbstractEntity.prototype, "deletedAt", void 0);
//# sourceMappingURL=abstract.entity.js.map