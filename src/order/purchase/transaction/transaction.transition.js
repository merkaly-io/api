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
exports.PurchaseTransactionTransition = void 0;
const common_1 = require("@nestjs/common");
const balance_service_1 = require("../../../inventory/stock/services/balance.service");
const abstract_transition_1 = require("../../../../infrastructure/abstracts/abstract.transition");
const transaction_enum_1 = require("../enums/transaction.enum");
class PurchaseTransactionTransition extends abstract_transition_1.AbstractTransition {
    $handlers = {
        [transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED]: (entity) => this.onPurchaseCancelled(entity),
        [transaction_enum_1.PurchaseTransactionStatusEnum.OPEN]: (entity) => Promise.resolve(entity),
        [transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED]: (entity) => this.onPurchaseOrdered(entity),
        [transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED]: (entity) => this.onPurchaseReceived(entity),
    };
    $states = {
        [transaction_enum_1.PurchaseTransactionStatusEnum.OPEN]: [transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED, transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED, transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED]: [transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED, transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED],
        [transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED]: [],
        [transaction_enum_1.PurchaseTransactionStatusEnum.CANCELLED]: [],
    };
    $balances;
    constructor(status = transaction_enum_1.PurchaseTransactionStatusEnum.OPEN) {
        super(status);
    }
    get initialStates() {
        return [transaction_enum_1.PurchaseTransactionStatusEnum.OPEN, transaction_enum_1.PurchaseTransactionStatusEnum.ORDERED, transaction_enum_1.PurchaseTransactionStatusEnum.RECEIVED];
    }
    toReadable(entity) {
        return entity.number;
    }
    async onPurchaseReceived(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise1 = this.$balances.adjustStock({
                amount: +it.quantity,
                variantId: it.variant._id,
                warehouseId: it.warehouse._id,
            });
            const promise2 = this.$balances.adjustIncoming({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: it.warehouse._id,
            });
            promises.push(promise1, promise2);
        });
        return Promise.all(promises);
    }
    async onPurchaseOrdered(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustIncoming({
                amount: it.quantity,
                variantId: it.variant._id,
                warehouseId: it.warehouse._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    async onPurchaseCancelled(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustIncoming({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: it.warehouse._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
}
exports.PurchaseTransactionTransition = PurchaseTransactionTransition;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", balance_service_1.StockBalanceService)
], PurchaseTransactionTransition.prototype, "$balances", void 0);
//# sourceMappingURL=transaction.transition.js.map