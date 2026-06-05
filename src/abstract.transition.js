export class AbstractTransition {
  constructor(current) {
    this.$current = current;
  }

  canTransition(from, to) {
    const allowed = this.$states[from] ?? [];
    return allowed.includes(to);
  }

  get nextStates() {
    return this.$states[this.$current] ?? [];
  }

  get prevStates() {
    return Object.entries(this.$states)
      .filter(([, next]) => next.includes(this.$current))
      .map(([prev]) => prev);
  }

  get isTerminal() {
    return (this.$states[this.$current] ?? []).length === 0;
  }
}
