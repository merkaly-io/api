import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';
import { SaleTransactionEntity as Entity } from '../entities/transaction.entity';
import { SaleTransactionStatusEnum as Status } from '../enums/transaction.enum';
export declare class SaleTransactionTransition extends AbstractTransition<Status, Entity> {
    readonly $handlers: {
        CANCELLED: (entity: Entity) => Promise<any[] | Entity>;
        COMPLETED: (entity: Entity) => Promise<any[]>;
        IN_PROGRESS: (entity: Entity) => Promise<any[]>;
        OPEN: (entity: Entity) => Promise<Entity>;
    };
    protected readonly $states: {
        OPEN: Status[];
        IN_PROGRESS: Status[];
        COMPLETED: any[];
        CANCELLED: any[];
    };
    private readonly $balances;
    constructor(status?: Status);
    get initialStates(): Status[];
    protected toReadable(entity: Entity): string;
    private onSaleInProgress;
    private onSaleCompleted;
    private onSaleCancelled;
}
