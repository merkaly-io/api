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
    static rules = { filters: [], sort: [] };
    pagination = new PaginationValidator();
    sort = {};
    filters = {};
}
exports.SearchValidator = SearchValidator;
__decorate([
    (0, class_transformer_1.Transform)(({ key, value }) => {
        if (!value) {
            return new PaginationValidator();
        }
        const parsed = (0, class_validator_1.isObject)(value) ? value : parseQueryJson(key, value);
        return (0, class_transformer_1.plainToInstance)(PaginationValidator, parsed);
    }),
    (0, class_validator_1.ValidateNested)(),
    (0, class_transformer_1.Type)(() => PaginationValidator),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", PaginationValidator)
], SearchValidator.prototype, "pagination", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ key, value }) => assertSortOrder(transformStructuredValue(key, value))),
    AllowedBy('sort', sortViolation),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchValidator.prototype, "sort", void 0);
__decorate([
    (0, class_transformer_1.Transform)(({ key, value }) => transformStructuredValue(key, value)),
    AllowedBy('filters', filterViolation),
    (0, class_validator_1.IsOptional)(),
    __metadata("design:type", Object)
], SearchValidator.prototype, "filters", void 0);
class QueryValidationError extends Error {
    statusCode = 400;
}
const FORBIDDEN_OPERATORS = new Set(['$where', '$function', '$accumulator']);
const FIELD_OPERATORS = new Set([
    '$eq',
    '$ne',
    '$in',
    '$nin',
    '$gt',
    '$gte',
    '$lt',
    '$lte',
    '$regex',
    '$options',
    '$exists',
]);
const LOGICAL_OPERATORS = new Set(['$and', '$or']);
const rulesOf = (object) => object.constructor.rules ?? SearchValidator.rules;
function AllowedBy(name, violation) {
    return (0, class_validator_1.ValidateBy)({
        name: `${name}Allowed`,
        validator: {
            defaultMessage: (args) => violation(args?.value, rulesOf(args?.object ?? {})) ?? `${name} is not allowed`,
            validate: (value, args) => !violation(value, rulesOf(args?.object ?? {})),
        },
    });
}
const isScalar = (value) => value === null || ['string', 'number', 'boolean'].includes(typeof value);
const isPlainValue = (value) => isScalar(value) || ((0, class_validator_1.isArray)(value) && value.every(isScalar));
function filterViolation(value, rules, path = 'filters') {
    if (value === undefined || value === null)
        return undefined;
    if (!(0, class_validator_1.isObject)(value))
        return `${path} must be an object`;
    for (const [field, condition] of Object.entries(value)) {
        if (LOGICAL_OPERATORS.has(field)) {
            if (!(0, class_validator_1.isArray)(condition))
                return `${path}.${field} must be an array`;
            const nested = condition
                .map((item) => filterViolation(item ?? {}, rules, `${path}.${field}`))
                .find(Boolean);
            if (nested)
                return nested;
            continue;
        }
        if (!rules.filters.includes(field))
            return `${path}.${field} is not filterable`;
        if (isPlainValue(condition))
            continue;
        if (!(0, class_validator_1.isObject)(condition))
            return `${path}.${field} must be a value or an operator object`;
        for (const [operator, operand] of Object.entries(condition)) {
            if (!FIELD_OPERATORS.has(operator))
                return `${path}.${field} must not use ${operator}`;
            if (!isPlainValue(operand))
                return `${path}.${field}.${operator} must be a plain value`;
        }
    }
    return undefined;
}
function sortViolation(value, rules) {
    if (!(0, class_validator_1.isObject)(value))
        return undefined;
    const field = Object.keys(value).find((key) => !rules.sort.includes(key));
    return field ? `sort.${field} is not sortable` : undefined;
}
const SORT_ORDERS = new Set([1, -1, 'asc', 'desc', 'ascending', 'descending']);
function assertSortOrder(sort) {
    if (!sort)
        return sort;
    if (!(0, class_validator_1.isObject)(sort) || (0, class_validator_1.isArray)(sort))
        throw new QueryValidationError('sort must be an object');
    for (const [field, order] of Object.entries(sort)) {
        if (!SORT_ORDERS.has(order))
            throw new QueryValidationError(`sort.${field} must be 1, -1, asc or desc`);
    }
    return sort;
}
function parseQueryJson(key, value) {
    if (!(0, class_validator_1.isJSON)(value))
        throw new QueryValidationError(`${key} must be valid JSON`);
    return JSON.parse(value);
}
function assertNoForbiddenOperators(key, value) {
    if ((0, class_validator_1.isArray)(value))
        return value.forEach((item) => assertNoForbiddenOperators(key, item));
    if (!(0, class_validator_1.isObject)(value))
        return;
    for (const [field, nested] of Object.entries(value)) {
        if (FORBIDDEN_OPERATORS.has(field))
            throw new QueryValidationError(`${key} must not use ${field}`);
        assertNoForbiddenOperators(key, nested);
    }
}
function transformStructuredValue(key, value) {
    if (!value) {
        return undefined;
    }
    const parsed = (0, class_validator_1.isObject)(value) || (0, class_validator_1.isArray)(value) ? value : parseQueryJson(key, value);
    assertNoForbiddenOperators(key, parsed);
    return parsed;
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