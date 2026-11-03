import type { LogisticsShipmentStatusEnum, LogisticsTrackingEventCodeEnum } from './shipment.enum';
export interface LogisticsTrackingInput {
    at: Date;
    description: string;
    location?: string;
}
export interface LogisticsParcelInput {
    trackingNumber: string;
    carrier?: string;
    trackingUrl?: string;
    events: LogisticsTrackingInput[];
    received?: boolean;
}
export interface LogisticsBuyerShipment {
    status: LogisticsShipmentStatusEnum;
    trackingNumber?: string;
    carrier?: string;
    trackingUrl?: string;
    shippedAt?: Date;
    deliveredAt?: Date;
    events: {
        at: Date;
        code: LogisticsTrackingEventCodeEnum;
        location?: string;
    }[];
}
