"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.confirmedByBuyer = exports.deliveredAtOf = void 0;
exports.saleReceipt = saleReceipt;
const shipment_enum_1 = require("../../logistics/shipment/shipment.enum");
const sale_enum_1 = require("./sale.enum");
const deliveredAtOf = (shipments) => {
    const at = Math.max(0, ...shipments.map((it) => (it.deliveredAt ? new Date(it.deliveredAt).getTime() : 0)));
    return at ? new Date(at) : null;
};
exports.deliveredAtOf = deliveredAtOf;
const confirmedByBuyer = (shipments) => shipments.some((it) => it.receivedBy === shipment_enum_1.LogisticsShipmentSourceEnum.BUYER);
exports.confirmedByBuyer = confirmedByBuyer;
function saleReceipt(status, shipments, now = Date.now()) {
    if (status === sale_enum_1.OrderSaleStatusEnum.SHIPPED)
        return { confirmable: true, until: null };
    const deliveredAt = (0, exports.deliveredAtOf)(shipments);
    if (status !== sale_enum_1.OrderSaleStatusEnum.DELIVERED || !deliveredAt || (0, exports.confirmedByBuyer)(shipments)) {
        return { confirmable: false, until: null };
    }
    const until = new Date(deliveredAt.getTime() + sale_enum_1.WITHDRAWAL_HOLD_MS);
    return { confirmable: until.getTime() > now, until };
}
//# sourceMappingURL=receipt.js.map