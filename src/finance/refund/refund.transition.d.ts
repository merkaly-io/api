import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';
import { FinanceRefundEntity as Entity } from '../entities/refund.entity';
import { FinanceRefundStatusEnum as Status } from '../enums/refund.enum';
export declare class FinanceRefundTransition extends AbstractTransition<Status, Entity> {
    readonly $handlers: {
        APPROVED: (entity: Entity) => Promise<Entity>;
        CANCELLED: (entity: Entity) => Promise<Entity>;
        COMPLETED: (entity: Entity) => Promise<Entity>;
        PENDING: (entity: Entity) => Promise<Entity>;
        PROCESSING: (entity: Entity) => Promise<Entity>;
        REJECTED: (entity: Entity) => Promise<Entity>;
    };
    protected readonly $states: {
        PENDING: Status[];
        APPROVED: Status[];
        PROCESSING: Status[];
        COMPLETED: any[];
        REJECTED: any[];
        CANCELLED: any[];
    };
    constructor(status?: Status);
    protected toReadable(entity: Entity): string;
}
