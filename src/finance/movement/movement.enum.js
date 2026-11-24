"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinanceMovementKindEnum = exports.FinanceMovementBucketEnum = void 0;
var FinanceMovementBucketEnum;
(function (FinanceMovementBucketEnum) {
    FinanceMovementBucketEnum["AVAILABLE"] = "AVAILABLE";
    FinanceMovementBucketEnum["RETAINED"] = "RETAINED";
    FinanceMovementBucketEnum["RECEIVABLE"] = "RECEIVABLE";
    FinanceMovementBucketEnum["SUPPLIER"] = "SUPPLIER";
})(FinanceMovementBucketEnum || (exports.FinanceMovementBucketEnum = FinanceMovementBucketEnum = {}));
var FinanceMovementKindEnum;
(function (FinanceMovementKindEnum) {
    FinanceMovementKindEnum["SALE_RETAINED"] = "SALE_RETAINED";
    FinanceMovementKindEnum["SALE_RELEASED"] = "SALE_RELEASED";
    FinanceMovementKindEnum["SALE_RECEIVABLE"] = "SALE_RECEIVABLE";
    FinanceMovementKindEnum["SUPPLIER_COST"] = "SUPPLIER_COST";
    FinanceMovementKindEnum["WITHDRAWAL"] = "WITHDRAWAL";
    FinanceMovementKindEnum["REFUND_FEE"] = "REFUND_FEE";
})(FinanceMovementKindEnum || (exports.FinanceMovementKindEnum = FinanceMovementKindEnum = {}));
//# sourceMappingURL=movement.enum.js.map