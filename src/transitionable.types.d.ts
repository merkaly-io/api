import { StatusEntity } from './status.plugin';
export interface ITransitionable<S extends string> {
    status: S;
    readonly history: StatusEntity<S>[];
}
