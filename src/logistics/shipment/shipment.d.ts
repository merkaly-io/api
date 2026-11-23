import type { LogisticsShipmentStatusEnum, LogisticsTrackingEventCodeEnum } from './shipment.enum';
export interface LogisticsTrackingInput {
    date: Date;
    description: string;
    location?: string;
}
export interface LogisticsParcelInput {
    trackingNumber: string;
    carrier?: string;
    trackingUrl?: string;
    events: LogisticsTrackingInput[];
    received?: boolean;
    items?: LogisticsShipmentItem[];
}
export interface LogisticsShipmentItem {
    item: string;
    quantity: number;
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
    items: LogisticsShipmentItem[];
}
