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
exports.AbstractTransition = void 0;
const common_1 = require("@nestjs/common");
const logger_service_1 = require("../services/logger.service");
class AbstractTransition {
    $logger;
    $current;
    constructor(currentStatus) {
        this.$current = currentStatus;
    }
    get initialStates() {
        return [];
    }
    get nextStates() {
        if (this.$current === undefined) {
            return this.initialStates;
        }
        return this.$states[this.$current] ?? [];
    }
    get prevStates() {
        if (this.$current === undefined) {
            return [];
        }
        return Object.entries(this.$states)
            .filter(([, next]) => next.includes(this.$current))
            .map(([prev]) => prev);
    }
    get isTerminal() {
        if (this.$current === undefined) {
            return false;
        }
        return (this.$states[this.$current] ?? []).length === 0;
    }
    async move(entity, nextStatus) {
        const currentStatus = entity.status;
        if (currentStatus === nextStatus) {
            this.$logger.warn({
                group: entity.collection.name,
                message: `Ignore transition in entity ${this.toReadable(entity)} from ${currentStatus} to ${nextStatus}`,
                type: 'transition',
            });
            return;
        }
        const canChangeStatus = (this.$states[currentStatus] ?? []).includes(nextStatus);
        if (!canChangeStatus) {
            this.$logger.warn({
                group: entity.collection.name,
                message: `Invalid transition in entity ${this.toReadable(entity)} from ${currentStatus} to ${nextStatus}`,
                type: 'transition',
            });
            throw new common_1.BadRequestException(`Invalid transition from ${currentStatus} to ${nextStatus}`);
        }
        const handler = this.$handlers[nextStatus];
        this.$logger.debug({
            group: entity.collection.name,
            message: `Mutating entity ${this.toReadable(entity)} from ${currentStatus} to ${nextStatus}`,
            type: 'transition',
        });
        entity.status = nextStatus;
        await handler?.(entity);
        await entity.save();
    }
    async enter(entity) {
        const currentStatus = entity.status;
        const handler = this.$handlers[currentStatus];
        this.$logger.debug({
            group: entity.collection.name,
            message: `Entering entity ${this.toReadable(entity)} in ${currentStatus}`,
            type: 'transition',
        });
        await handler?.(entity);
        await entity.save();
    }
    async moveInitial(entity, nextStatus) {
        const currentStatus = entity.status;
        if (currentStatus === nextStatus) {
            await this.enter(entity);
            return;
        }
        const canChangeStatus = this.initialStates.includes(nextStatus);
        if (!canChangeStatus) {
            this.$logger.warn({
                group: entity.collection.name,
                message: `Invalid initial transition in entity ${this.toReadable(entity)} from ${currentStatus} to ${nextStatus}`,
                type: 'transition',
            });
            throw new common_1.BadRequestException(`Invalid initial transition from ${currentStatus} to ${nextStatus}`);
        }
        const handler = this.$handlers[nextStatus];
        this.$logger.debug({
            group: entity.collection.name,
            message: `Creating initial transition in entity ${this.toReadable(entity)} from ${currentStatus} to ${nextStatus}`,
            type: 'transition',
        });
        entity.status = nextStatus;
        await handler?.(entity);
        await entity.save();
    }
}
exports.AbstractTransition = AbstractTransition;
__decorate([
    (0, common_1.Inject)(),
    __metadata("design:type", logger_service_1.LoggerService)
], AbstractTransition.prototype, "$logger", void 0);
//# sourceMappingURL=abstract.transition.js.map