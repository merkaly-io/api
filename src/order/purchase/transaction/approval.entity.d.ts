import { PurchaseApprovalStatus } from './approval.enum';
export declare class PurchaseApprovalEntity {
    status: PurchaseApprovalStatus;
    quoteVersion: string;
    actor?: string;
    decidedAt?: Date;
}
