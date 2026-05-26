"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransferTypeEnum = exports.TransferStatusEnum = void 0;
var TransferStatusEnum;
(function (TransferStatusEnum) {
    TransferStatusEnum["PENDING"] = "PENDING";
    TransferStatusEnum["COMPLETED"] = "COMPLETED";
    TransferStatusEnum["CANCELLED"] = "CANCELLED";
})(TransferStatusEnum || (exports.TransferStatusEnum = TransferStatusEnum = {}));
var TransferTypeEnum;
(function (TransferTypeEnum) {
    TransferTypeEnum["ENTRY"] = "ENTRY";
    TransferTypeEnum["EXIT"] = "EXIT";
    TransferTypeEnum["INTERNAL"] = "INTERNAL";
})(TransferTypeEnum || (exports.TransferTypeEnum = TransferTypeEnum = {}));
//# sourceMappingURL=transfer.enum.js.map