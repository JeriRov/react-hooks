export interface IUseDeepCompareEffect {
  (callback: () => void, dependencies: unknown[]): void;
}
