"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SUPPLIER_ORDER_SYNCABLE_STATUSES = exports.SUPPLIER_ORDER_PROGRESS = exports.OrderSupplierOrderStatusEnum = void 0;
var OrderSupplierOrderStatusEnum;
(function (OrderSupplierOrderStatusEnum) {
    OrderSupplierOrderStatusEnum["PLACED"] = "PLACED";
    OrderSupplierOrderStatusEnum["AWAITING_PAYMENT"] = "AWAITING_PAYMENT";
    OrderSupplierOrderStatusEnum["PAID"] = "PAID";
    OrderSupplierOrderStatusEnum["SHIPPED"] = "SHIPPED";
    OrderSupplierOrderStatusEnum["DELIVERED"] = "DELIVERED";
    OrderSupplierOrderStatusEnum["CANCELLED"] = "CANCELLED";
    OrderSupplierOrderStatusEnum["FAILED"] = "FAILED";
})(OrderSupplierOrderStatusEnum || (exports.OrderSupplierOrderStatusEnum = OrderSupplierOrderStatusEnum = {}));
exports.SUPPLIER_ORDER_PROGRESS = [
    OrderSupplierOrderStatusEnum.PLACED,
    OrderSupplierOrderStatusEnum.AWAITING_PAYMENT,
    OrderSupplierOrderStatusEnum.PAID,
    OrderSupplierOrderStatusEnum.SHIPPED,
    OrderSupplierOrderStatusEnum.DELIVERED,
];
exports.SUPPLIER_ORDER_SYNCABLE_STATUSES = [
    OrderSupplierOrderStatusEnum.PLACED,
    OrderSupplierOrderStatusEnum.AWAITING_PAYMENT,
    OrderSupplierOrderStatusEnum.PAID,
    OrderSupplierOrderStatusEnum.SHIPPED,
];
//# sourceMappingURL=supplier.order.enum.js.map