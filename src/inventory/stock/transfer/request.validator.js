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
exports.UpdateStockTransferRequestValidator = exports.CreateStockTransferRequestValidator = exports.StockTransferItemRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
const transfer_enum_1 = require("./transfer.enum");
const abstract_validator_1 = require("../../../abstract.validator");
const not_equal_to_decorator_1 = require("../../../not-equal-to.decorator");
class StockTransferItemRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    product;
    variant;
    quantity;
    notes;
    constructor(item) {
        super();
        if (!item) {
            return;
        }
        this.product = (item.product?._id || item.product);
        this.variant = (item.variant?._id || item.variant);
        this.quantity = item.quantity;
        this.notes = item.notes;
    }
}
exports.StockTransferItemRequestValidator = StockTransferItemRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], StockTransferItemRequestValidator.prototype, "product", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    __metadata("design:type", String)
], StockTransferItemRequestValidator.prototype, "variant", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    (0, class_validator_1.Min)(1),
    __metadata("design:type", Number)
], StockTransferItemRequestValidator.prototype, "quantity", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], StockTransferItemRequestValidator.prototype, "notes", void 0);
class CreateStockTransferRequestValidator extends abstract_validator_1.AbstractRequestValidator {
    origin;
    destination;
    items;
    notes;
    status;
    constructor(transfer) {
        super();
        if (!transfer) {
            return;
        }
        this.origin = (transfer.origin?._id || transfer.origin);
        this.destination = (transfer.destination?._id || transfer.destination);
        this.notes = transfer.notes;
        this.status = transfer.status;
        this.items =
            transfer.items?.map((item) => new StockTransferItemRequestValidator(item)) ?? this.items;
    }
}
exports.CreateStockTransferRequestValidator = CreateStockTransferRequestValidator;
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.ValidateIf)((it) => Boolean(it.origin || !it.destination)),
    __metadata("design:type", String)
], CreateStockTransferRequestValidator.prototype, "origin", void 0);
__decorate([
    (0, class_validator_1.IsMongoId)(),
    (0, class_validator_1.ValidateIf)((it) => Boolean(it.destination || !it.origin)),
    (0, not_equal_to_decorator_1.IsNotEqualTo)((it) => it.origin),
    __metadata("design:type", String)
], CreateStockTransferRequestValidator.prototype, "destination", void 0);
__decorate([
    (0, class_validator_1.IsArray)(),
    (0, class_validator_1.ArrayNotEmpty)(),
    (0, class_validator_1.ValidateNested)({ each: true }),
    (0, class_transformer_1.Type)(() => StockTransferItemRequestValidator),
    __metadata("design:type", Array)
], CreateStockTransferRequestValidator.prototype, "items", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    (0, class_validator_1.Length)(0, 500),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStockTransferRequestValidator.prototype, "notes", void 0);
__decorate([
    (0, class_validator_1.IsEnum)(transfer_enum_1.TransferStatusEnum),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], CreateStockTransferRequestValidator.prototype, "status", void 0);
class UpdateStockTransferRequestValidator extends CreateStockTransferRequestValidator {
}
exports.UpdateStockTransferRequestValidator = UpdateStockTransferRequestValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStockTransferRequestValidator.prototype, "origin", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], UpdateStockTransferRequestValidator.prototype, "destination", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Array)
], UpdateStockTransferRequestValidator.prototype, "items", void 0);
//# sourceMappingURL=request.validator.js.map