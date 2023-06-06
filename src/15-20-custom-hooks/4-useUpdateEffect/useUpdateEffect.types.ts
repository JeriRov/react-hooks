export interface IUseUpdateEffect {
  (callback: () => void, dependencies: unknown[]): void;
}
