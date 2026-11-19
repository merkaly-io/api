import { Schema as MongoSchema } from 'mongoose';
import { AbstractEntity } from "../../abstract.entity";
import { FinanceChargebackReasonEnum, FinanceChargebackStatusEnum } from './chargeback.enum';
import { FinancePaymentEntity } from '../payment/payment.entity';
export declare class FinanceChargebackHistoryEntity {
    date: Date;
    status: FinanceChargebackStatusEnum;
}
export declare const FinanceChargebackHistorySchema: MongoSchema<FinanceChargebackHistoryEntity, import("mongoose").Model<FinanceChargebackHistoryEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceChargebackHistoryEntity, any, {}> & FinanceChargebackHistoryEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceChargebackHistoryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceChargebackHistoryEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceChargebackHistoryEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceChargebackGatewayEntity {
    provider: string;
    reference?: string | null;
    id?: string | null;
    status: string;
    reason?: string | null;
}
export declare const FinanceChargebackGatewaySchema: MongoSchema<FinanceChargebackGatewayEntity, import("mongoose").Model<FinanceChargebackGatewayEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceChargebackGatewayEntity, any, {}> & FinanceChargebackGatewayEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceChargebackGatewayEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceChargebackGatewayEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceChargebackGatewayEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceChargebackEntity extends AbstractEntity {
    payment: FinancePaymentEntity | string;
    amount: number;
    status: FinanceChargebackStatusEnum;
    history: FinanceChargebackHistoryEntity[];
    reason?: FinanceChargebackReasonEnum | null;
    respondBy?: Date | null;
    gateway: FinanceChargebackGatewayEntity;
}
