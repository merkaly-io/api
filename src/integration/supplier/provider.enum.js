"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SupplierReadinessEnum = exports.SupplierErrorCodeEnum = exports.SupplierProviderEnum = void 0;
var SupplierProviderEnum;
(function (SupplierProviderEnum) {
    SupplierProviderEnum["ALIEXPRESS"] = "aliexpress";
})(SupplierProviderEnum || (exports.SupplierProviderEnum = SupplierProviderEnum = {}));
var SupplierErrorCodeEnum;
(function (SupplierErrorCodeEnum) {
    SupplierErrorCodeEnum["ACCESS_DENIED"] = "SUPPLIER_ACCESS_DENIED";
    SupplierErrorCodeEnum["CONNECTION_EXPIRED"] = "SUPPLIER_CONNECTION_EXPIRED";
    SupplierErrorCodeEnum["CONNECTION_REQUIRED"] = "SUPPLIER_CONNECTION_REQUIRED";
    SupplierErrorCodeEnum["RECIPIENT_DOCUMENT_INVALID"] = "SUPPLIER_RECIPIENT_DOCUMENT_INVALID";
    SupplierErrorCodeEnum["REQUEST_REJECTED"] = "SUPPLIER_REQUEST_REJECTED";
    SupplierErrorCodeEnum["UNAVAILABLE"] = "SUPPLIER_UNAVAILABLE";
})(SupplierErrorCodeEnum || (exports.SupplierErrorCodeEnum = SupplierErrorCodeEnum = {}));
var SupplierReadinessEnum;
(function (SupplierReadinessEnum) {
    SupplierReadinessEnum["NOT_CONNECTED"] = "NOT_CONNECTED";
    SupplierReadinessEnum["EXPIRED"] = "EXPIRED";
    SupplierReadinessEnum["READY"] = "READY";
})(SupplierReadinessEnum || (exports.SupplierReadinessEnum = SupplierReadinessEnum = {}));
//# sourceMappingURL=provider.enum.js.map