import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from '../../abstract.entity';
import { LogisticsShipmentSourceEnum, LogisticsShipmentStatusEnum, LogisticsTrackingEventCodeEnum } from './shipment.enum';
import type { OrderPurchaseEntity } from '../../order/purchase/purchase.entity';
import type { OrderSaleEntity } from '../../order/sale/sale.entity';
export declare class LogisticsShipmentEventEntity {
    date: Date;
    code: LogisticsTrackingEventCodeEnum;
    description: string;
    location?: string | null;
}
export declare const LogisticsShipmentEventSchema: MongoSchema<LogisticsShipmentEventEntity, import("mongoose").Model<LogisticsShipmentEventEntity, any, any, any, import("mongoose").Document<unknown, any, LogisticsShipmentEventEntity, any, {}> & LogisticsShipmentEventEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LogisticsShipmentEventEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LogisticsShipmentEventEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<LogisticsShipmentEventEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class LogisticsShipmentTrackingEntity {
    number?: string | null;
    carrier?: string | null;
    url?: string | null;
}
export declare const LogisticsShipmentTrackingSchema: MongoSchema<LogisticsShipmentTrackingEntity, import("mongoose").Model<LogisticsShipmentTrackingEntity, any, any, any, import("mongoose").Document<unknown, any, LogisticsShipmentTrackingEntity, any, {}> & LogisticsShipmentTrackingEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LogisticsShipmentTrackingEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LogisticsShipmentTrackingEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<LogisticsShipmentTrackingEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class LogisticsShipmentEntity extends AbstractEntity {
    sale: OrderSaleEntity;
    purchase?: OrderPurchaseEntity | null;
    source: LogisticsShipmentSourceEnum;
    tracking?: LogisticsShipmentTrackingEntity | null;
    shippedAt?: Date | null;
    deliveredAt?: Date | null;
    receivedBy?: LogisticsShipmentSourceEnum | null;
    events: LogisticsShipmentEventEntity[];
    status: LogisticsShipmentStatusEnum;
}
