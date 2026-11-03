import { LogisticsTrackingEventCodeEnum } from './shipment.enum';
export declare class LogisticsShipmentEventEntity {
    at: Date;
    code: LogisticsTrackingEventCodeEnum;
    description: string;
    location?: string | null;
}
export declare const LogisticsShipmentEventSchema: import("mongoose").Schema<LogisticsShipmentEventEntity, import("mongoose").Model<LogisticsShipmentEventEntity, any, any, any, import("mongoose").Document<unknown, any, LogisticsShipmentEventEntity, any, {}> & LogisticsShipmentEventEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, LogisticsShipmentEventEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<LogisticsShipmentEventEntity>, {}, import("mongoose").ResolveSchemaOptions<import("mongoose").DefaultSchemaOptions>> & import("mongoose").FlatRecord<LogisticsShipmentEventEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
