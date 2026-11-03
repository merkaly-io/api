"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogisticsTrackingEventCodeEnum = exports.LogisticsShipmentSourceEnum = exports.LogisticsShipmentDirectionEnum = exports.LogisticsShipmentStatusEnum = void 0;
var LogisticsShipmentStatusEnum;
(function (LogisticsShipmentStatusEnum) {
    LogisticsShipmentStatusEnum["PENDING"] = "PENDING";
    LogisticsShipmentStatusEnum["IN_TRANSIT"] = "IN_TRANSIT";
    LogisticsShipmentStatusEnum["DELIVERED"] = "DELIVERED";
    LogisticsShipmentStatusEnum["EXCEPTION"] = "EXCEPTION";
})(LogisticsShipmentStatusEnum || (exports.LogisticsShipmentStatusEnum = LogisticsShipmentStatusEnum = {}));
var LogisticsShipmentDirectionEnum;
(function (LogisticsShipmentDirectionEnum) {
    LogisticsShipmentDirectionEnum["OUTBOUND"] = "OUTBOUND";
    LogisticsShipmentDirectionEnum["RETURN"] = "RETURN";
})(LogisticsShipmentDirectionEnum || (exports.LogisticsShipmentDirectionEnum = LogisticsShipmentDirectionEnum = {}));
var LogisticsShipmentSourceEnum;
(function (LogisticsShipmentSourceEnum) {
    LogisticsShipmentSourceEnum["SUPPLIER"] = "SUPPLIER";
    LogisticsShipmentSourceEnum["MERCHANT"] = "MERCHANT";
    LogisticsShipmentSourceEnum["CARRIER"] = "CARRIER";
    LogisticsShipmentSourceEnum["BUYER"] = "BUYER";
})(LogisticsShipmentSourceEnum || (exports.LogisticsShipmentSourceEnum = LogisticsShipmentSourceEnum = {}));
var LogisticsTrackingEventCodeEnum;
(function (LogisticsTrackingEventCodeEnum) {
    LogisticsTrackingEventCodeEnum["POSTED"] = "POSTED";
    LogisticsTrackingEventCodeEnum["IN_TRANSIT"] = "IN_TRANSIT";
    LogisticsTrackingEventCodeEnum["CUSTOMS"] = "CUSTOMS";
    LogisticsTrackingEventCodeEnum["OUT_FOR_DELIVERY"] = "OUT_FOR_DELIVERY";
    LogisticsTrackingEventCodeEnum["DELIVERED"] = "DELIVERED";
    LogisticsTrackingEventCodeEnum["EXCEPTION"] = "EXCEPTION";
})(LogisticsTrackingEventCodeEnum || (exports.LogisticsTrackingEventCodeEnum = LogisticsTrackingEventCodeEnum = {}));
//# sourceMappingURL=shipment.enum.js.map