import { LoggerService } from '../services/logger.service';
import { ITransitionable } from '../types/transitionable.interface';
import { AbstractEntity } from './abstract.entity';
export declare abstract class AbstractTransition<S extends string, E extends AbstractEntity> {
    protected readonly $logger: LoggerService;
    protected abstract readonly $handlers: Partial<Record<S, (entity: E & ITransitionable<S | undefined>) => Promise<unknown>>>;
    protected abstract readonly $states: Readonly<Record<S, readonly S[]>>;
    private readonly $current?;
    protected constructor(currentStatus?: S);
    get initialStates(): readonly S[];
    get nextStates(): readonly S[];
    get prevStates(): S[];
    get isTerminal(): boolean;
    move(entity: E & ITransitionable<S>, nextStatus: S): Promise<void>;
    enter(entity: E & ITransitionable<S>): Promise<void>;
    moveInitial(entity: E & ITransitionable<S>, nextStatus: S): Promise<void>;
    protected abstract toReadable(entity: E): string;
}
