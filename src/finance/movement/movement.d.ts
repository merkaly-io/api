import type { FinanceMovementBucketEnum, FinanceMovementKindEnum } from './movement.enum';
export interface FinanceMovementOrder {
    id: string;
    number: string | null;
}
export interface FinanceMovement {
    id: string;
    kind: FinanceMovementKindEnum;
    bucket: FinanceMovementBucketEnum;
    amount: number;
    date: Date;
    order: FinanceMovementOrder | null;
    withdrawal: string | null;
    releaseAt: Date | null;
}
export interface FinanceSupplierDue {
    amount: number;
    count: number;
}
export interface FinanceBalanceMeta {
    supplierDue: FinanceSupplierDue;
    nextRelease: Date | null;
}
export interface FinanceMovementTotal {
    amount: number;
    count: number;
}
export interface FinanceMovementsMeta {
    summary: Record<FinanceMovementBucketEnum, FinanceMovementTotal>;
}
export interface FinanceMovementRules {
    holdMs: number;
    now: Date;
    unsettledStatuses: readonly string[];
}
