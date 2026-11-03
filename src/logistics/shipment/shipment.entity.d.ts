import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from '../../abstract.entity';
import { LogisticsShipmentDirectionEnum, LogisticsShipmentSourceEnum, LogisticsShipmentStatusEnum, LogisticsTrackingEventCodeEnum } from './shipment.enum';
import type { OrderPurchaseEntity } from '../../order/purchase/purchase.entity';
import type { OrderSaleEntity } from '../../order/sale/sale.entity';
import type { StatusEntity } from '../../status.plugin';
export declare class LogisticsShipmentEventEntity {
    at: Date;
    code: LogisticsTrackingEventCodeEnum;
    description: string;
    location?: string | null;
}
export declare const LogisticsShipmentEventSchema: MongoSchema<LogisticsShipmentEventEntity, import("mongoose").Model<LogisticsShipmentEventEntity, any, any, any, import("mongoose").Document<unknown, any, LogisticsShipmentEventEntity, any, {}> & LogisticsShipmentEventEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LogisticsShipmentEventEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LogisticsShipmentEventEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<LogisticsShipmentEventEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class LogisticsShipmentEntity extends AbstractEntity {
    order: OrderSaleEntity;
    purchase?: OrderPurchaseEntity | null;
    direction: LogisticsShipmentDirectionEnum;
    source: LogisticsShipmentSourceEnum;
    trackingNumber?: string | null;
    carrier?: string | null;
    trackingUrl?: string | null;
    shippedAt?: Date | null;
    deliveredAt?: Date | null;
    receivedBy?: LogisticsShipmentSourceEnum | null;
    events: LogisticsShipmentEventEntity[];
    status: LogisticsShipmentStatusEnum;
    history: StatusEntity<LogisticsShipmentStatusEnum>[];
}
