export declare class PurchaseLineAllocationEntity {
    saleLineId: string;
    quantity: number;
}
export declare class PurchaseSourcingEntity {
    sale: string;
    connection: string;
    idempotencyKey: string;
    externalOrderId?: string;
    allocations: PurchaseLineAllocationEntity[];
}
