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
exports.SearchValidator = exports.ReadValidator = exports.AbstractRequestValidator = void 0;
const class_transformer_1 = require("class-transformer");
const class_validator_1 = require("class-validator");
class PaginationValidator {
    limit = 10;
    page = 1;
}
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 10)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginationValidator.prototype, "limit", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => (value ? Number(value) : 1)),
    (0, class_validator_1.IsInt)(),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Number)
], PaginationValidator.prototype, "page", void 0);
class AbstractRequestValidator {
}
exports.AbstractRequestValidator = AbstractRequestValidator;
class ReadValidator extends AbstractRequestValidator {
    join = [];
    select;
}
exports.ReadValidator = ReadValidator;
__decorate([
    (0, class_validator_1.IsOptional)(),
    (0, class_transformer_1.Transform)(({ value }) => transformJoinsIntoPopulate(value)),
    __metadata("design:type", Array)
], ReadValidator.prototype, "join", void 0);
__decorate([
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", String)
], ReadValidator.prototype, "select", void 0);
class SearchValidator extends ReadValidator {
    pagination = new PaginationValidator();
    sort = {};
    filters = {};
}
exports.SearchValidator = SearchValidator;
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => {
        if (!value) {
            return new PaginationValidator();
        }
        const parsed = (0, class_validator_1.isObject)(value) ? value : JSON.parse(value);
        return (0, class_transformer_1.plainToInstance)(PaginationValidator, parsed);
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaginationValidator),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", PaginationValidator)
], SearchValidator.prototype, "pagination", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => transformStructuredValue(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchValidator.prototype, "sort", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ value }) => transformStructuredValue(value)),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchValidator.prototype, "filters", void 0);
function transformStructuredValue(value) {
    if (!value) {
        return undefined;
    }
    if ((0, class_validator_1.isObject)(value) || (0, class_validator_1.isArray)(value)) {
        return value;
    }
    return JSON.parse(value);
}
function transformJoinsIntoPopulate(value) {
    function transform(value) {
        if ((0, class_validator_1.isString)(value)) {
            try {
                const parsed = JSON.parse(value);
                return transform(parsed);
            }
            catch {
                return [{ path: value }];
            }
        }
        if ((0, class_validator_1.isArray)(value)) {
            return value.flatMap(transform);
        }
        if (typeof value === 'object' && value !== null && 'path' in value) {
            const result = { path: value.path };
            if (value.populate) {
                result.populate = transform(value.populate);
            }
            return [result];
        }
        return [];
    }
    return transform(value);
}
//# sourceMappingURL=abstract.validator.js.map