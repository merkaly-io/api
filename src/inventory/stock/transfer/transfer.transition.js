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
exports.StockTransferTransition = void 0;
const common_1 = require("@nestjs/common");
const balance_service_1 = require("../services/balance.service");
const abstract_transition_1 = require("../../../../infrastructure/abstracts/abstract.transition");
const transfer_enum_1 = require("../enums/transfer.enum");
class StockTransferTransition extends abstract_transition_1.AbstractTransition {
    $states = {
        [transfer_enum_1.TransferStatusEnum.PENDING]: [transfer_enum_1.TransferStatusEnum.COMPLETED, transfer_enum_1.TransferStatusEnum.CANCELLED],
        [transfer_enum_1.TransferStatusEnum.COMPLETED]: [],
        [transfer_enum_1.TransferStatusEnum.CANCELLED]: [],
    };
    $handlers = {
        [transfer_enum_1.TransferStatusEnum.CANCELLED]: (entity) => this.onTransferCancelled(entity),
        [transfer_enum_1.TransferStatusEnum.COMPLETED]: (entity) => this.onTransferCompleted(entity),
        [transfer_enum_1.TransferStatusEnum.PENDING]: (entity) => this.onTransferPending(entity),
    };
    $balances;
    constructor(status = transfer_enum_1.TransferStatusEnum.PENDING) {
        super(status);
    }
    get initialStates() {
        return [transfer_enum_1.TransferStatusEnum.PENDING, transfer_enum_1.TransferStatusEnum.COMPLETED];
    }
    toReadable(entity) {
        return entity.number;
    }
    onTransferPending(entity) {
        const handlers = {
            [transfer_enum_1.TransferTypeEnum.ENTRY]: () => this.onTransferEntryPending(entity),
            [transfer_enum_1.TransferTypeEnum.EXIT]: () => this.onTransferExitPending(entity),
            [transfer_enum_1.TransferTypeEnum.INTERNAL]: () => this.onTransferInternalPending(entity),
        };
        const handler = handlers[entity.type];
        if (!handler) {
            return Promise.resolve(entity);
        }
        return handler();
    }
    onTransferCompleted(entity) {
        const handlers = {
            [transfer_enum_1.TransferTypeEnum.ENTRY]: () => this.onTransferEntryCompleted(entity),
            [transfer_enum_1.TransferTypeEnum.EXIT]: () => this.onTransferExitCompleted(entity),
            [transfer_enum_1.TransferTypeEnum.INTERNAL]: () => this.onTransferInternalCompleted(entity),
        };
        const handler = handlers[entity.type];
        if (!handler) {
            return Promise.resolve(entity);
        }
        return handler();
    }
    onTransferCancelled(entity) {
        const handlers = {
            [transfer_enum_1.TransferTypeEnum.ENTRY]: () => this.onTransferEntryCancelled(entity),
            [transfer_enum_1.TransferTypeEnum.EXIT]: () => this.onTransferExitCancelled(entity),
            [transfer_enum_1.TransferTypeEnum.INTERNAL]: () => this.onTransferInternalCancelled(entity),
        };
        const handler = handlers[entity.type];
        if (!handler) {
            return Promise.resolve(entity);
        }
        return handler();
    }
    async onTransferEntryPending(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustIncoming({
                amount: it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.destination._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    async onTransferEntryCompleted(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise1 = this.$balances.adjustIncoming({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.destination._id,
            });
            const promise2 = this.$balances.adjustStock({
                amount: it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.destination._id,
            });
            promises.push(promise1, promise2);
        });
        return Promise.all(promises);
    }
    async onTransferEntryCancelled(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustIncoming({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.destination._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    async onTransferExitPending(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustReserved({
                amount: it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.origin._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    async onTransferExitCompleted(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise1 = this.$balances.adjustReserved({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.origin._id,
            });
            const promise2 = this.$balances.adjustStock({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.origin._id,
            });
            promises.push(promise1, promise2);
        });
        return Promise.all(promises);
    }
    async onTransferExitCancelled(entity) {
        const promises = [];
        entity.items.forEach((it) => {
            const promise = this.$balances.adjustReserved({
                amount: -it.quantity,
                variantId: it.variant._id,
                warehouseId: entity.origin._id,
            });
            promises.push(promise);
        });
        return Promise.all(promises);
    }
    async onTransferInternalPending(entity) {
        await this.onTransferExitPending(entity);
        return this.onTransferEntryPending(entity);
    }
    async onTransferInternalCompleted(entity) {
        await this.onTransferExitCompleted(entity);
        return this.onTransferEntryCompleted(entity);
    }
    async onTransferInternalCancelled(entity) {
        await this.onTransferExitCancelled(entity);
        return this.onTransferEntryCancelled(entity);
    }
}
exports.StockTransferTransition = StockTransferTransition;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", balance_service_1.StockBalanceService)
], StockTransferTransition.prototype, "$balances", void 0);
//# sourceMappingURL=transfer.transition.js.map