import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';
import { FinancePaymentEntity as Entity } from '../entities/payment.entity';
import { FinancePaymentStatusEnum as Status } from '../enums/payment.enum';
export declare class FinancePaymentTransition extends AbstractTransition<Status, Entity> {
    readonly $handlers: {
        PENDING: (entity: Entity) => Promise<Entity>;
        PAID: (entity: Entity) => Promise<Entity>;
        CANCELLED: (entity: Entity) => Promise<Entity>;
    };
    protected readonly $states: {
        PENDING: Status[];
        PAID: any[];
        CANCELLED: any[];
    };
    constructor(status?: Status);
    get initialStates(): Status[];
    protected toReadable(entity: Entity): string;
}
