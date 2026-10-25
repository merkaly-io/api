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
exports.OrderDestinationSnapshotEntity = exports.OrderLineSnapshotEntity = exports.OrderOptionSnapshotEntity = void 0;
const mongoose_1 = require("@nestjs/mongoose");
const money_entity_1 = require("./money.entity");
const provider_reference_entity_1 = require("./provider-reference.entity");
let OrderOptionSnapshotEntity = class OrderOptionSnapshotEntity {
    name;
    value;
};
exports.OrderOptionSnapshotEntity = OrderOptionSnapshotEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderOptionSnapshotEntity.prototype, "name", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderOptionSnapshotEntity.prototype, "value", void 0);
exports.OrderOptionSnapshotEntity = OrderOptionSnapshotEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], OrderOptionSnapshotEntity);
let OrderLineSnapshotEntity = class OrderLineSnapshotEntity {
    title;
    source;
    options;
    unitPrice;
};
exports.OrderLineSnapshotEntity = OrderLineSnapshotEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderLineSnapshotEntity.prototype, "title", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, required: true, type: provider_reference_entity_1.ProviderSkuReferenceEntity }),
    __metadata("design:type", provider_reference_entity_1.ProviderSkuReferenceEntity)
], OrderLineSnapshotEntity.prototype, "source", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, type: [OrderOptionSnapshotEntity], default: undefined }),
    __metadata("design:type", Array)
], OrderLineSnapshotEntity.prototype, "options", void 0);
__decorate([
    (0, mongoose_1.Prop)({ _id: false, required: true, type: money_entity_1.MoneyEntity }),
    __metadata("design:type", money_entity_1.MoneyEntity)
], OrderLineSnapshotEntity.prototype, "unitPrice", void 0);
exports.OrderLineSnapshotEntity = OrderLineSnapshotEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], OrderLineSnapshotEntity);
let OrderDestinationSnapshotEntity = class OrderDestinationSnapshotEntity {
    recipient;
    line1;
    line2;
    city;
    region;
    postalCode;
    country;
};
exports.OrderDestinationSnapshotEntity = OrderDestinationSnapshotEntity;
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "recipient", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "line1", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "line2", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "city", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "region", void 0);
__decorate([
    (0, mongoose_1.Prop)({ trim: true, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "postalCode", void 0);
__decorate([
    (0, mongoose_1.Prop)({ required: true, match: /^[A-Z]{2}$/, type: String }),
    __metadata("design:type", String)
], OrderDestinationSnapshotEntity.prototype, "country", void 0);
exports.OrderDestinationSnapshotEntity = OrderDestinationSnapshotEntity = __decorate([
    (0, mongoose_1.Schema)({ _id: false })
], OrderDestinationSnapshotEntity);
//# sourceMappingURL=order-snapshot.entity.js.map