import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';
import { PurchaseTransactionEntity as Entity } from '../entities/transaction.entity';
import { PurchaseTransactionStatusEnum as Status } from '../enums/transaction.enum';
export declare class PurchaseTransactionTransition extends AbstractTransition<Status, Entity> {
    readonly $handlers: {
        CANCELLED: (entity: Entity) => Promise<any[]>;
        OPEN: (entity: Entity) => Promise<Entity>;
        ORDERED: (entity: Entity) => Promise<any[]>;
        RECEIVED: (entity: Entity) => Promise<any[]>;
    };
    protected readonly $states: {
        OPEN: Status[];
        ORDERED: Status[];
        RECEIVED: any[];
        CANCELLED: any[];
    };
    private readonly $balances;
    constructor(status?: Status);
    get initialStates(): Status[];
    protected toReadable(entity: Entity): string;
    private onPurchaseReceived;
    private onPurchaseOrdered;
    private onPurchaseCancelled;
}
