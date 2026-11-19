import { Schema as MongoSchema } from 'mongoose';
import { AccountUserEntity } from "../../account/user/user.entity";
import { PaymentPixKeyTypeEnum } from "../../integration/payment/account.enum";
import { AbstractEntity } from "../../abstract.entity";
import { FinanceWithdrawalKindEnum, FinanceWithdrawalStatusEnum } from './withdrawal.enum';
export declare class FinanceWithdrawalHistoryEntity {
    date: Date;
    status: FinanceWithdrawalStatusEnum;
}
export declare const FinanceWithdrawalHistorySchema: MongoSchema<FinanceWithdrawalHistoryEntity, import("mongoose").Model<FinanceWithdrawalHistoryEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceWithdrawalHistoryEntity, any, {}> & FinanceWithdrawalHistoryEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceWithdrawalHistoryEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceWithdrawalHistoryEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceWithdrawalHistoryEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceWithdrawalPixKeyEntity {
    type?: PaymentPixKeyTypeEnum | null;
    masked?: string | null;
}
export declare const FinanceWithdrawalPixKeySchema: MongoSchema<FinanceWithdrawalPixKeyEntity, import("mongoose").Model<FinanceWithdrawalPixKeyEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceWithdrawalPixKeyEntity, any, {}> & FinanceWithdrawalPixKeyEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceWithdrawalPixKeyEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceWithdrawalPixKeyEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceWithdrawalPixKeyEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceWithdrawalGatewayEntity {
    provider: string;
    reference?: string | null;
    status: string;
    receiptUrl?: string | null;
}
export declare const FinanceWithdrawalGatewaySchema: MongoSchema<FinanceWithdrawalGatewayEntity, import("mongoose").Model<FinanceWithdrawalGatewayEntity, any, any, any, import("mongoose").Document<unknown, any, FinanceWithdrawalGatewayEntity, any, {}> & FinanceWithdrawalGatewayEntity & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}, any>, {}, {}, {}, {}, import("mongoose").DefaultSchemaOptions, FinanceWithdrawalGatewayEntity, import("mongoose").Document<unknown, {}, import("mongoose").FlatRecord<FinanceWithdrawalGatewayEntity>, {}, import("mongoose").DefaultSchemaOptions> & import("mongoose").FlatRecord<FinanceWithdrawalGatewayEntity> & {
    _id: import("mongoose").Types.ObjectId;
} & {
    __v: number;
}>;
export declare class FinanceWithdrawalEntity extends AbstractEntity {
    amount: number;
    fee: number;
    readonly netAmount: number;
    status: FinanceWithdrawalStatusEnum;
    kind: FinanceWithdrawalKindEnum;
    history: FinanceWithdrawalHistoryEntity[];
    error?: string | null;
    requestedBy?: AccountUserEntity | string | null;
    pixKey?: FinanceWithdrawalPixKeyEntity | null;
    gateway: FinanceWithdrawalGatewayEntity;
}
