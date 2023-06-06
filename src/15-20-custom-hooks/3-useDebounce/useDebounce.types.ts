export interface IUseDebounce {
  (callback: () => void, delay: number, dependencies: unknown[]): void;
}
