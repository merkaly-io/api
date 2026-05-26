import { AbstractTransition } from 'src/infrastructure/abstracts/abstract.transition';
import { StockTransferEntity as Entity } from '../entities/transfer.entity';
import { TransferStatusEnum as Status } from '../enums/transfer.enum';
export declare class StockTransferTransition extends AbstractTransition<Status, Entity> {
    protected readonly $states: {
        PENDING: Status[];
        COMPLETED: any[];
        CANCELLED: any[];
    };
    protected readonly $handlers: {
        CANCELLED: (entity: Entity) => Promise<any[]> | Promise<Entity>;
        COMPLETED: (entity: Entity) => Promise<any[]> | Promise<Entity>;
        PENDING: (entity: Entity) => Promise<any[]> | Promise<Entity>;
    };
    private readonly $balances;
    constructor(status?: Status);
    get initialStates(): Status[];
    protected toReadable(entity: Entity): string;
    protected onTransferPending(entity: Entity): Promise<any[]> | Promise<Entity>;
    protected onTransferCompleted(entity: Entity): Promise<any[]> | Promise<Entity>;
    protected onTransferCancelled(entity: Entity): Promise<any[]> | Promise<Entity>;
    private onTransferEntryPending;
    private onTransferEntryCompleted;
    private onTransferEntryCancelled;
    private onTransferExitPending;
    private onTransferExitCompleted;
    private onTransferExitCancelled;
    private onTransferInternalPending;
    private onTransferInternalCompleted;
    private onTransferInternalCancelled;
}
