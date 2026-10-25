import { SaleDeliveryStatus } from './delivery.enum';
export declare class SaleDeliveryEntity {
    status: SaleDeliveryStatus;
    observedAt: Date;
    trackingReference?: string;
}
