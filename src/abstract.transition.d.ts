export declare abstract class AbstractTransition<S extends string, E = unknown> {
  private $current: S;
  constructor(current: S);
  protected abstract readonly $states: Readonly<Record<S, readonly S[]>>;
  canTransition(from: S, to: S): boolean;
  readonly nextStates: readonly S[];
  readonly prevStates: S[];
  readonly isTerminal: boolean;
}
